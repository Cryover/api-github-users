import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserDetails from "./pages/userDetails";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
