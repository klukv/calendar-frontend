import React from "react";
import { useDispatch } from "react-redux";
import { contextChangeValue } from "../pages/admin";
import { setStateChange } from "../redux/slices/userSlice";
import { deleteUser } from "../services/message-service";

interface IUser {
  user: {
    id: number;
    email: string;
    username: string;
    roles: string[];
    isAuth: boolean;
  };
  toggle: (isOpen: boolean) => void;
}

const User: React.FC<IUser> = ({ user, toggle }) => {
  const dispatch = useDispatch();
  const { setValue, setId } = React.useContext(contextChangeValue);
  const handleChangeName = () => {
    setValue("Пользователь");
    setId(user.id);
    toggle(true);
  };
  const handleChangeEmail = () => {
    setValue("Email");
    setId(user.id);
    toggle(true);
  };
  const handleDeleteUser = () => {
    deleteUser(user.id).then((data) => dispatch(setStateChange(true)));
  };

  return (
    <li className="admin__list-link">
      <div className="info">
        <div className="info__block">
          <div className="info__title">Пользователь:</div>
          <div className="info__name">{user.username}</div>
          <button className="info__button name" onClick={handleChangeName}>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M9 15V12.5L17.75 3.75C18.4404 3.05964 19.5596 3.05964 20.25 3.75V3.75C20.9404 4.44036 20.9404 5.55964 20.25 6.25L15.5 11L11.5 15H9Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="info__block">
          <div className="info__title">Email:</div>
          <div className="info__email">{user.email}</div>
          <button className="info__button email" onClick={handleChangeEmail}>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M9 15V12.5L17.75 3.75C18.4404 3.05964 19.5596 3.05964 20.25 3.75V3.75C20.9404 4.44036 20.9404 5.55964 20.25 6.25L15.5 11L11.5 15H9Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="admin__delete-block">
          <button
            type="button"
            className="admin__btn-delete"
            onClick={handleDeleteUser}
          >
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default User;
