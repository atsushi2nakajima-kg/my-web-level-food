import "./style.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import Header from "../header/header";
import Img from "../../assets/image copy.png"
function Certificates() {
  return (
  
    <section className="certificates">
      <h1>Наши сертификаты</h1>

      <div className="cert-slider">

        <div className="cert-card">
          <div className="certificate">
            <img src={Img} alt="Ветеринарный сертификат" />
          </div>

          <h3>Сертификат качества</h3>
          <p>
            Подтверждает соответствие продукции стандартам качества.
          </p>
        </div>

        <div className="cert-card">
          <div className="certificate">
            <img src={Img} alt="Ветеринарный сертификат" />
          </div>

          <h3>Ветеринарный сертификат</h3>
          <p>
            Гарантия безопасности и полного контроля продукции.
          </p>
        </div>

        <div className="cert-card">
          <div className="certificate">
            <img src={Img} alt="Ветеринарный сертификат" />
          </div>

          <h3>Сертификат производителя</h3>
          <p>
            Гарантия происхождения и высокого уровня производства.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Certificates;