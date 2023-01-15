import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import User from "../components/User";
import "../css/admin.css";
import { setAllUsers, setStateChange } from "../redux/slices/userSlice";
import { RootState } from "../redux/store";
import { getAllUsers } from "../services/message-service";

interface IChangeContext {
  setValue: (value: string) => void;
  setId: (id: number) => void;
}
const defaultContext = {
  setValue: () => "",
  setId: () => null,
};

export const contextChangeValue =
  React.createContext<IChangeContext>(defaultContext);

const Admin: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const [id, setId] = React.useState(0);
  const [isOpen, toggle] = React.useState(false);
  const { allUsers, isChangeUsers } = useSelector(
    ({ userSlice }: RootState) => {
      return {
        allUsers: userSlice.allUsers,
        isChangeUsers: userSlice.isChangeUsers,
      };
    }
  );
  React.useEffect(() => {
    if (isChangeUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUsers(data));
        dispatch(setStateChange(false));
      });
    }
  }, [isChangeUsers]);
  return (
    <>
      <div className="admin">
        <h2 className="admin__title">Список пользователей</h2>
        <div className="admin__inner">
          <contextChangeValue.Provider
            value={{
              setValue,
              setId,
            }}
          >
            <ul className="admin__list">
              {allUsers.map((user, index) => (
                <User key={index} user={{ ...user }} toggle={toggle} />
              ))}
            </ul>
          </contextChangeValue.Provider>
        </div>
      </div>
      <Modal value={value} user_id={id} isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Admin;
