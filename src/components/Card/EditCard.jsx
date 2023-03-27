import React from "react";
import { Eraser } from "@phosphor-icons/react";
import { useState } from "react";
import {
  useBucketQuery,
  useEditCard,
  useMoveCard,
} from "../../hooks/useCovinQuery.js";

const EditCard = ({ data, cardData }) => {
  const [newName, setNewName] = useState(cardData.name);
  const [newUrl, setNewUrl] = useState(cardData.url);
  const [destinationBucket, setDestinationBucket] = useState(null);

  const { mutate: editCard } = useEditCard();
  const { mutate: moveCard } = useMoveCard();
  const { data: bucket, isLoading } = useBucketQuery();
  if (isLoading) return <></>;

  const handleSubmit = () => {
    editCard({ data: data, newName: newName, newUrl: newUrl, id: cardData.id });
    destinationBucket !== null &&
      moveCard({
        destinationBucket: destinationBucket,
        data: data,
        cardData: cardData,
      });
    setDestinationBucket(null);
  };
  return (
    <div>
      <label htmlFor={`my-modal-${cardData.id}`}>
        <Eraser
          className="cursor-pointer"
          size={25}
          color="#1a754a"
          weight="fill"
        />
      </label>

      <input
        type="checkbox"
        id={`my-modal-${cardData.id}`}
        className="modal-toggle"
      />
      <label
        htmlFor={`my-modal-${cardData.id}`}
        className="modal cursor-pointer z-20"
      >
        <label className="modal-box relative flex flex-col gap-2" htmlFor="">
          <p className="text-2xl">Edit : {cardData.name}</p>
          <div className="dropdown dropdown-hover w-full">
            <label tabIndex={0} className="btn m-1 w-full">
              Move To{" "}
              {destinationBucket !== null && ` : ${destinationBucket.bucket}`}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
            >
              {bucket.map((el) => (
                <li key={el.id} onClick={() => setDestinationBucket(el)}>
                  <a>{el.bucket}</a>
                </li>
              ))}
            </ul>
          </div>

          <input
            type="text"
            placeholder="Name for Card"
            value={newName}
            className="input w-full border-black"
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Url"
            value={newUrl}
            className="input w-full border-black"
            onChange={(e) => setNewUrl(e.target.value)}
          />
          <label
            htmlFor={`my-modal-${cardData.id}`}
            className="btn"
            onClick={() => handleSubmit()}
          >
            Submit
          </label>
        </label>
      </label>
    </div>
  );
};

export default EditCard;
