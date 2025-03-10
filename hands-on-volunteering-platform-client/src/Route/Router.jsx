import { Route, Routes } from "react-router";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
