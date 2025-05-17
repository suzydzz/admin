// import { useState } from 'react'
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./index.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";

function App() {
  return (
    <Routes>
      <Route path="/admin/" element={<FirstPage />} />{" "}
      <Route path="/admin/second-page" element={<SecondPage />} />{" "}
      <Route
        path="*"
        element={
          <h1>
            <div style={{ display: "flex" , justifyContent:"center", alignItems: "center"}}>Страница не найдена 😞</div>
          </h1>
        }
      />
    </Routes>
  );
}

export default App;
