import { MdDeleteForever } from "react-icons/md";

const OneRecord = (props) => {
  const { id, text, image, time, color, money, iconColor, deleteModal } = props;
  return (
    <div className="w-full px-6 py-3 border bg-white border-[#E5E7EB] items-center justify-between flex rounded-xl">
      <div className="flex gap-4">
        <div
          className={`flex justify-center items-center w-10 h-10 rounded-full bg-[${iconColor}]`}
          style={{
            backgroundColor: iconColor,
          }}
        >
          {image}
        </div>

        <div className="flex flex-col">
          <p className="font-normal text-base">{text}</p>
          <p className="font-normal text-xs text-[#6B7280]"> {time} </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <p
          className={`font-semibold text-base text-[${color}]`}
          style={{ text: color }}
        >
          {money}
        </p>
        <MdDeleteForever size={16} onClick={deleteModal} />
      </div>
    </div>
  );
};

export default OneRecord;
