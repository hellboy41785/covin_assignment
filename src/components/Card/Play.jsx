import { PlayCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { useHistoryStore } from "../../store/useStore";

const Play = ({ cardData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const setHistory = useHistoryStore((state) => state.setHistory);
  const updateHistory = useHistoryStore((state) => state.updateHistory);
  const history = useHistoryStore((state) => state.history);

  const toggleOpen = () => {
    const date = new Date().toLocaleTimeString();
    const findHistory = history.find((el) => el.id === cardData.id)?.id || null;

    setModalOpen(!modalOpen);
    if (findHistory === null) {
      setHistory({
        ...cardData,
        time: date,
      });
    } else {
      updateHistory({ id: findHistory, time: date });
    }
  };

  return (
    <div>
      <label htmlFor={`my-modal-${cardData.name}`} className="cursor-pointer">
        <PlayCircle
          size={25}
          color="#1d758c"
          weight="fill"
          onClick={() => toggleOpen()}
        />
      </label>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={`my-modal-${cardData.name}`}
        className="modal-toggle"
      />
      <label
        htmlFor={`my-modal-${cardData.name}`}
        className="modal cursor-pointer"
      >
        <label
          className="modal-box relative bg-none flex flex-col gap-5 h-[400px] md:h-[800px]  w-11/12 max-w-5xl"
          htmlFor=""
        >
          {modalOpen && (
            <iframe
              className="w-full h-full rounded"
              src={cardData.url}
              autoPlay
            ></iframe>
          )}
          <label
            htmlFor={`my-modal-${cardData.name}`}
            className="btn"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </label>
        </label>
      </label>
    </div>
  );
};

export default Play;
