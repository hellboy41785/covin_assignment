
import { Trash, TrashSimple,} from "@phosphor-icons/react";
import EditCard from "./EditCard";
import SelectedDelete from "./SelectedDelete";
import { useCovinStore } from "../../store/useStore";
import Play from "./Play";
import {
  useDeleteCard,
  useDeleteSelectedCard,
} from "../../hooks/useCovinQuery";

const Card = ({ data }) => {
  const checkedValue = useCovinStore((state) => state.checkedValue);

  const { mutate: deleteCard } = useDeleteCard();
  const { mutate: deleteSelectedCard } = useDeleteSelectedCard();


  return (
    <div className=" max-w-5xl">
      {data.card.length === 0 ? (
        <div className="w-full flex justify-center p-2 border-t border-black">
          <h1>Add your Card</h1>
        </div>
      ) : (
        <div className="flex flex-col border-t border-black gap-2">
          {/* SelectedDelete */}
          {checkedValue.length !== 0 && (
            <div
              className="tooltip tooltip-right w-9 mt-2 cursor-pointer"
              data-tip={`Delete ${checkedValue.length}`}
            >
              <TrashSimple
                size={30}
                color="#b12036"
                weight="fill"
                onClick={() =>
                  deleteSelectedCard({ checkedValue: checkedValue, data: data })
                }
              />
            </div>
          )}

          {/* Cards */}
          {data.card.map((el) => (
            <div className="py-5 px-2 flex justify-between" key={el.id}>
              <div className="flex items-center gap-2">
                <SelectedDelete cardData={el} data={data} />
              </div>
              <div className="flex gap-2">
                <div
                  className="tooltip tooltip-bottom cursor-pointer z-10"
                  data-tip="Edit"
                >
                  <EditCard data={data} cardData={el} />
                </div>
                <div
                  className="tooltip tooltip-bottom cursor-pointer"
                  data-tip="Play"
                >
                  <Play cardData={el} />
                </div>
                <div
                  className="tooltip tooltip-bottom cursor-pointer"
                  data-tip="Delete"
                >
                  <Trash
                    size={25}
                    color="#9f1e1e"
                    weight="fill"
                    onClick={() => deleteCard({ cardId: el.id, data })}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
