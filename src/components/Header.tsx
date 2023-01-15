import React from "react";
import "../css/header.css";
import user from "../assets/img/user.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { admin, main, signin } from "../const/const";

const Header = () => {
  const { isAuth, roles } = useSelector(({ userSlice }: RootState) => {
    return {
      isAuth: userSlice.user.isAuth,
      roles: userSlice.user.roles,
    };
  });

  const isAdmin = roles[0] === "ROLE_ADMIN";
  
  return (
    <header className="header">
      <div className="header__inner">
        <Link to={main} className="header__title">
          Я CALENDAR
        </Link>
        {isAuth ? (
          <>
            <div className="header__image">
              <img src={user} alt="user" />
            </div>
            {isAdmin && (
              <Link to={admin} className="header__admin-btn">
                Админ
              </Link>
            )}
          </>
        ) : (
          <Link to={signin} className="header__signin">
            Войти в аккаунт
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
