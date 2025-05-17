import { useEffect, useState } from "react";
import type { Item } from "../../types";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const [local, setLocal] = useState<Item[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
//   const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const todoList = localStorage.getItem("local");
    if (todoList) {
      const todoListObj = JSON.parse(todoList);
      setLocal(todoListObj);
    }
  }, []);
  // для загрузки задач из localStotage

  useEffect(() => {
    const todoList = JSON.stringify(local);
    localStorage.setItem("todos", todoList);
  }, [local]);
  // для сохранения задач в localStorage

  const handleLogin = () => {
    navigate("/admin/second-page");
  };


  return (
    <div className="background">
      <div className="back">
        <h1 className="title">Вход</h1>
        <div className="box">
          <div className="login">
            <h2 className="titleTwo">Логин</h2>
            <input
              type="text"
              value={email}
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login">
            <h2 className="titleTwo">Пароль</h2>
            <input 
            type="password" 
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login">
            <h2></h2>
            <button className="button" onClick={handleLogin}>
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
