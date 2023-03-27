import { FolderSimplePlus } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useCreateCard } from "../../hooks/useCovinQuery";

const CreateCard = ({ data }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const { mutate: createCard } = useCreateCard();

  return (
    <div>
      <label htmlFor={`my-modal-${data.id}`}>
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
          <p>{data.bucket}</p>
          <input
            type="text"
            placeholder="Name for Card"
            className="input w-full border-black"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Url"
            className="input w-full border-black"
            onChange={(e) => setUrl(e.target.value)}
          />
          <label
            htmlFor={`my-modal-${data.id}`}
            className="btn"
            onClick={() =>
              createCard({
                id: uuidv4(),
                name: name,
                url: url,
                data: data,
              })
            }
          >
            Submit
          </label>
        </label>
      </label>
    </div>
  );
};

export default CreateCard;
