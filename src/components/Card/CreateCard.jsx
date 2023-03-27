import { FolderSimplePlus } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useCreateCard } from "../../hooks/useCovinQuery";

const CreateCard = ({ data }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const { mutate: createCard } = useCreateCard();

  const handleSubmit = () => {
    createCard({
      id: uuidv4(),
      name: name,
      url: url,
      data: data,
    });
    setName("");
    setUrl("");
  };

  return (
    <div>
      <label htmlFor={`my-modal-${data.id}`} >
        <FolderSimplePlus
          className="z-10 cursor-pointer"
          size={40}
          color="#262626"
          weight="fill"
        />
      </label>

      <input
        type="checkbox"
        id={`my-modal-${data.id}`}
        className="modal-toggle"
      />
      <label
        htmlFor={`my-modal-${data.id}`}
        className="modal cursor-pointer z-20"
      >
        <label className="modal-box relative flex flex-col gap-2" htmlFor="">
          <p className="text-2xl">{data.bucket}</p>
          <input
            type="text"
            placeholder="Name for Card"
            value={name}
            className="input w-full border-black"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Url"
            value={url}
            className="input w-full border-black"
            onChange={(e) => setUrl(e.target.value)}
          />
          <label
            htmlFor={`my-modal-${data.id}`}
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

export default CreateCard;
