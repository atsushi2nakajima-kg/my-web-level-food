import "./style.css";
import Meet from "../../assets/image.png";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartcontext";

function Section3() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = {
    id: "beef-Мраморная говядина 1 кг-2000",
    title: "Мраморная говядина 1 кг",
    description: "Описание",
    price: 2000,
    image: Meet,
  };

  const handleOrder = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <section>
      <div className="container">
        <div className="section3">
          <h1>Товары</h1>

          <div className="product-grid">
            <div className="product-card">
              <img src={Meet} alt="Мраморная говядина" />

              <h3>Мраморная говядина 1 кг</h3>
              <p>Описание</p>
              <strong>2000 ₽</strong>

              <div className="product-buttons">
                <button onClick={handleOrder}>Заказать</button>
                <button className="more">Подробнее</button>
              </div>
            </div>

            <div className="product-card">
              <img src={Meet} alt="Мраморная говядина" />

              <h3>Мраморная говядина 1 кг</h3>
              <p>Описание</p>
              <strong>2000 ₽</strong>

              <div className="product-buttons">
                <button onClick={handleOrder}>Заказать</button>
                <button className="more">Подробнее</button>
              </div>
            </div>

            <div className="product-card">
              <img src={Meet} alt="Мраморная говядина" />

              <h3>Мраморная говядина 1 кг</h3>
              <p>Описание</p>
              <strong>2000 ₽</strong>

              <div className="product-buttons">
                <button onClick={handleOrder}>Заказать</button>
                <button className="more">Подробнее</button>
              </div>
            </div>

            <div className="product-card">
              <img src={Meet} alt="Мраморная говядина" />

              <h3>Мраморная говядина 1 кг</h3>
              <p>Описание</p>
              <strong>2000 ₽</strong>

              <div className="product-buttons">
                <button onClick={handleOrder}>Заказать</button>
                <button className="more">Подробнее</button>
              </div>
            </div>

            <div className="product-card">
              <img src={Meet} alt="Мраморная говядина" />

              <h3>Мраморная говядина 1 кг</h3>
              <p>Описание</p>
              <strong>2000 ₽</strong>

              <div className="product-buttons">
                <button onClick={handleOrder}>Заказать</button>
                <button className="more">Подробнее</button>
              </div>
            </div>

            <div className="product-card">
              <img src={Meet} alt="Мраморная говядина" />

              <h3>Мраморная говядина 1 кг</h3>
              <p>Описание</p>
              <strong>2000 ₽</strong>

              <div className="product-buttons">
                <button onClick={handleOrder}>Заказать</button>
                <button className="more">Подробнее</button>
              </div>
            </div>

            <div className="product-card">
              <img src={Meet} alt="Мраморная говядина" />

              <h3>Мраморная говядина 1 кг</h3>
              <p>Описание</p>
              <strong>2000 ₽</strong>

              <div className="product-buttons">
                <button onClick={handleOrder}>Заказать</button>
                <button className="more">Подробнее</button>
              </div>
            </div>

            <div className="product-card">
              <img src={Meet} alt="Мраморная говядина" />

              <h3>Мраморная говядина 1 кг</h3>
              <p>Описание</p>
              <strong>2000 ₽</strong>

              <div className="product-buttons">
                <button onClick={handleOrder}>Заказать</button>
                <button className="more">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
