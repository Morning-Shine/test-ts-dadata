import "./UserInfo.scss";
import USER_PLUG_AVATAR from "../../images/icons/avatar.svg";

type TUserInfoProps = {
  name: string;
  surname: string;
  userAvatar?: string;
};

export default function UserInfo({
  name,
  surname,
  userAvatar,
}: TUserInfoProps) {
  return (
    <div className="user-info">
      <div className="user-avatar">
        <img
          src={userAvatar ? userAvatar : USER_PLUG_AVATAR}
          alt="изображение пользователя"
        />
      </div>
      <h3>{`${name} ${surname}`}</h3>
    </div>
  );
}
