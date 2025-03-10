import { Route, Routes } from "react-router";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};
