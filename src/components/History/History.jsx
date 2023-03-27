import { useHistoryStore } from "../../store/useStore";

const History = () => {
  const history = useHistoryStore((state) => state.history);
  return (
    <div className="collapse rounded w-full">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex justify-between w-full">
        <h1 className="text-2xl">History</h1>
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content space-y-4">
        {history.length === 0 ? (
          <div className="flex justify-center border-t">
            <h3 className="text-xl font-bold">No History</h3>
          </div>
        ) : (
          history.map((el) => (
            <div className="flex flex-col" key={el.id}>
              <div className="flex justify-between items-center">
                <h1 className="text-xl">{el.name}</h1>
                <div>
                  <h1>{el.time}</h1>
                </div>
              </div>
              <p className="truncate text-sm">{el.url}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;
