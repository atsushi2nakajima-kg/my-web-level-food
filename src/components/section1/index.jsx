import "./style.css";
import image1 from "./image.png";
import { useNavigate } from "react-router-dom";

function Section1() {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="container">
        <div className="section1">
          <div className="textseciton1">
            <h1>
              Level food - ваши <br />качественные <br />поставки <br />премиального мяса</h1>
            <p>
              Мы - динамично развивающаяся компания в <br />сфере ресторанного бизнеса (Horeca) с <br />индивидуальным подходом к каждому клиенту
            </p>
            <button onClick={() => navigate("/product")}>Сделать заказ</button>
          </div>
          <img className="image1" src={image1}  alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section1;