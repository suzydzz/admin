import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import ForthPage from "./components/ForthPage/ForthPage";

function App() {
  
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/" element={<FirstPage />} />
        <Route path="/admin/second-page" element={<SecondPage />} />
        <Route path="/admin/third-page" element={<ThirdPage />} />
        <Route path="/admin/forth-page" element={<ForthPage />} />
        <Route
          path="*"
          element={
            <h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Страница не найдена 😞
              </div>
            </h1>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
