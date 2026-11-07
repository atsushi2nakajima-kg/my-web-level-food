import "./style.css";
import Image2 from "./image/image2.png";
import Image3 from "./image/image3.png";
import Image4 from "./image/image4.png";
// import image5 from "./image/image5";
import Image6 from "./image/image6.png";
import Image7 from "./image/image7.png";
import Image8 from "./image/image8.png";

function Section456() {
  return (
    <section>
      <div className="section4-9">
        <div className="container">
          <h1>Ваше лучшее мясо - здесь!</h1>
          <div className="section45">
            <p>
              {" "}
              Level Food — это синоним премиального качества и <br />
              широкого ассортимента мясной продукции. Мы гордимся <br />
              тем, что предлагаем нашим клиентам только лучшее мясо, <br />
              соответствующее высочайшим стандартам. Каждый продукт <br />
              проходит строгий контроль качества, чтобы вы могли быть <br />
              уверены в его свежести, вкусе и пользе.
            </p>
            <img src={Image2} alt="" />
          </div>
          <div className="section45">
            <img src={Image3} alt="" />
            <p>
              {" "}
              Разнообразие продукции позволяет удовлетворить запросы <br />
              даже самых взыскательных клиентов. Мы предлагаем как <br />
              оптовые поставки для ресторанов и предприятий HoReCa, <br />
              так и розничные заказы для частных клиентов. Благодаря <br />
              собственному логистическому парку и складу в Казани, мы <br />
              обеспечиваем быструю доставку и всегда поддерживаем <br />
              оптимальный запас продукции. <br />
              <br />
              Level Food — это не просто поставщик мяса, это гарантия <br />
              качества, свежести и высокого сервиса. Мы ценим каждого <br />
              клиента и стремимся предложить лучшее, чтобы ваши блюда <br />
              всегда были безупречными.
            </p>
          </div>
        </div>
        <div className="section6">
          <img className="image4" src={Image4} alt="" />
        </div>
        <div className="section7">
          <h1>мы работаем на качество</h1>
          <p>
            В нашей компании индивидуальный подход к каждому клиенту, что делает
            нашу <br />
            компанию уникальной на рынке. <br />
            <br />
            Свой логистический парк автомобилей с холодильными камерами
            позволяет <br />
            быстро и качественно доставить продукцию , с соблюдением всех
            условий <br />
            хранения и транспортировки. <br />
            <br />
            Так же у нас есть свой склад в городе Казани, что даёт нам
            преимущество в <br />
            плане наличия товара.
          </p>
        </div>
        <div className="container">
          <div className="section8">
            <h1>Наш мастер-класс - как это было?</h1>
            <img className="image6" src={Image6} alt="" />
          </div>
          <h1>Где мы находимся?</h1>
          <div className="section9">
            <div className="adress">
              <h2>Адрес</h2>
              <a href="">
                Улица Родины, 2​207 офис; 2 этаж Родина м-н, Советский район,
                Казань, <br />
                420087
              </a>
              <img className="image78" src={Image7} alt="" />
            </div>
            <div className="adress">
              <h2>Как нас найти?</h2>
              <img className="image78" src={Image8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section456;
