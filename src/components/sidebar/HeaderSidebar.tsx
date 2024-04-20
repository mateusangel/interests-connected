import { AvatarUsers } from "../avatar/Avatar";
import "./styles/_header-sidebar.sass";
import { FaGear } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { BiSolidConversation } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { MdPersonPinCircle } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
export const HeaderSidebar = () => {
  return (
    <div className="header-sidebar">
      <AvatarUsers/>
      <MdHomeFilled color="#ffff" size={25}  />
      <IoMdPerson color="#ffff" size={25}  />
      <BiSolidConversation color="#ffff" size={25}  />
      <MdPersonPinCircle color="#ffff" size={25}  />
      <IoMdHelpCircle color="#ffff" size={25}  />

      <FaGear className="gear" color="#ffff" size={25} />
    </div>
  );
};
