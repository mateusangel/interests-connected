import Avatar from "@mui/material/Avatar";
import character from "../../assets/img/foto.png";
import "./styles/avatar.sass"


export const AvatarUsers = () => {
  return <Avatar className="avatar" src={character}></Avatar>;
};
