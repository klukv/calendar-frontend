import React from "react";
import { useDispatch } from "react-redux";
import { setStateChange } from "../redux/slices/userSlice";
import {
  changeEmailUser,
  changeUsernameUser,
} from "../services/message-service";

type props = {
  value: string;
  user_id: number;
  isOpen: boolean;
  toggle: (isOpen: boolean) => void;
};

const Modal: React.FC<props> = ({ value, user_id, isOpen, toggle }) => {
  const [info, setInfo] = React.useState("");
  const dispatch = useDispatch();
  const changeInfo = (info: string) => {
    setInfo(info);
  };
  const handleClickButton = (event: React.FormEvent<HTMLFormElement>) => {
    switch (value) {
      case "Пользователь":
        changeUsernameUser(user_id, info).then((data) =>
          dispatch(setStateChange(true))
        );
        break;
      case "Email":
        changeEmailUser(user_id, info).then((data) =>
          dispatch(setStateChange(true))
        );
        break;
      default:
        break;
    }
    event.preventDefault();
    toggle(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal__overview" onClick={() => toggle(false)}>
          <form
            className="modal__form"
            onSubmit={(event) => handleClickButton(event)}
            onClick={(e) => e.stopPropagation()}
          >
            <label htmlFor="" className="change__title">
              {value}
            </label>
            <input
              type="text"
              className="modal__change"
              onChange={(event) => changeInfo(event.target.value)}
              required
            />
            <div className="modal__button">
              <button className="modal__btn" type="submit">
                Изменить
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Modal;
