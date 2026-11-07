import "./style.css";
import Arrow from "./arrow.svg";

function Section2() {
  return (
    <section>
      <div className="container">
        <div className="section2">
          <h1>Наши преимущества</h1>
          <div className="adventcards">
            <div className="adventcard">
              <div className="top">
                <h2>Профессионализм</h2>
                <img src={Arrow} alt="" />
              </div>
              <p>
                Квалифицированные сотрудники с <br />
                многолетним опытом работы
              </p>
            </div>

            <div className="adventcard">
              <div className="top">
                <h2>Цена-качеством</h2>
                <img src={Arrow} alt="" />
              </div>
              <p>
                Оптимальное соотношение стоимости и <br />
                качества премиальной продукции
              </p>
            </div>

            <div className="adventcard">
              <div className="top">
                <h2>Опт и розница</h2>
                <img src={Arrow} alt="" />
              </div>
              <p>
                Работаем как с оптовыми поставками, <br />
                так и с розничной доставкой
              </p>
            </div>

            <div className="adventcard">
              <div className="top">
                <h2>Гарантии</h2>
                <img src={Arrow} alt="" />
              </div>
              <p>
                 Долгосрочные гарантии на свежесть и <br />
                 качество продукции
              </p>
            </div>

            <div className="adventcard">
              <div className="top">
                <h2>Особые условиям</h2>
                <img src={Arrow} alt="" />
              </div>
              <p>
                Специальные условия для постоянных <br />
                клиентов и партнеров
              </p>
            </div>

            <div className="adventcard">
              <div className="top">
                <h2>Высокий сервис</h2>
                <img src={Arrow} alt="" />
              </div>
              <p>
                Индивидуальный подход и высокий <br />
                уровень обслуживания клиентов
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;