import { useCovinStore } from "../../store/useStore";
import { Link } from "@phosphor-icons/react";

const SelectedDelete = ({ cardData }) => {
  const setCheckedValue = useCovinStore((state) => state.setCheckedValue);
  const removeCheckedValue = useCovinStore((state) => state.removeCheckedValue);

  const handleChange = (event, id) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedValue(id);
    } else {
      removeCheckedValue(id);
    }
  };
  console.log();

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={(e) => handleChange(e, cardData.id)}
          className="checkbox checkbox-xs checkbox-warning"
        />
        <label className="font-bold text-xl">{cardData.name}</label>
      </div>
      <div className="w-56">
        <p className="text-xs truncate">{cardData.url}</p>
      </div>
    </div>
  );
};

export default SelectedDelete;
