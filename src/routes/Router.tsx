import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Home } from "../components/home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
