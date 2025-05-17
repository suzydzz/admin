import "./style.css";
import { useNavigate } from "react-router-dom";



function SecondPage() {
    const navigate = useNavigate();
    const handleFirstButton = () => {
      navigate("/admin/third-page");
    };

    const handleSecondButton = () => {
      navigate("/admin/forth-page");
    };

  return (
    <div className="backgroundSecond">
      <div className="backSecond">
        <div className="flex">
          <button className="firstButton" onClick={handleFirstButton}>
            Воронки
          </button>
          <button className="firstButton" onClick={handleSecondButton}>
            Продукты
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
