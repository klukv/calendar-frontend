import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import { RootState } from "./redux/store";
import { signin } from "./const/const";
import Admin from "./pages/admin";

const App: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector(({ userSlice }: RootState) => {
    return {
      isAuth: userSlice.user.isAuth,
    };
  });

  React.useEffect(() => {
    if (!isAuth) {
      navigate(signin);
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
