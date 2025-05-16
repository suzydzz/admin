// import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="background">
      <div className="back">
        <h1 className="title">Вход</h1>
        <div className="box">
          <div className="login">
            <h2 className="titleTwo">Логин</h2>
            <input type="text" className="input" />
          </div>
          <div className="login">
            <h2 className="titleTwo">Пароль</h2>
            <input type="text" className="input" />
          </div>
          <div className="login">
            <h2></h2>
            <button className="button">Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
