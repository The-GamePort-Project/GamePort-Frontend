import { IBaseButtonProps } from "../../../types";
interface IconButtonProps extends IBaseButtonProps {
  icon: string;
}
const IconButton = ({ icon, label, onClick }: IconButtonProps) => {
  return (
    <button
      className="flex items-center gap-2 rounded-md p-2 cursor-pointer border border-yellow-500 border-solid hover:bg-yellow-500"
      onClick={onClick}
    >
      <img src={icon} style={{ width: "25px", height: "25px" }} />
      <h3 className="text-yellow-600 hover:text-black">{label}</h3>
    </button>
  );
};
export default IconButton;
