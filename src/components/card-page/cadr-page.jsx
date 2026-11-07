import "./style.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartcontext";
import Meet from "../../assets/image.png";

function CardPage() {
  const location = useLocation();
  const { selectedProduct } = useCart();
  const product = location.state?.product || selectedProduct || {
    id: "beef-Мраморная говядина 1 кг-2000",
    title: "Мраморная говядина 1 кг",
    description: "Описание любой длинный",
    price: 2000,
    image: Meet,
  };

  return <CardPageContent key={product.id} product={product} />;
}

function CardPageContent({ product }) {
  const navigate = useNavigate();
  const { setSelectedProduct, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleOrder = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  const recommendations = Array.from({ length: 4 }, (_, index) => ({
    ...product,
    id: `${product.id}-recommended-${index + 1}`,
    description: "Описание",
  }));

  return (
    <section className="card-page">
      <div className="card-page-main">
        <div className="big-img">
          <img src={product.image || Meet} alt={product.title} />
        </div>

        <div className="big-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>{product.price.toLocaleString("ru-RU")} ₽</h2>
          <div className="detail-actions">
            <button onClick={handleOrder}>Заказать</button>
            <div className="detail-quantity" aria-label="Количество товара">
              <button aria-label="Уменьшить количество" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
              <span>{quantity}</span>
              <button aria-label="Увеличить количество" onClick={() => setQuantity((value) => value + 1)}>+</button>
            </div>
          </div>
        </div>
      </div>

      <section className="recommendations">
        <h2>Добавьте к заказу</h2>
        <div className="recommendation-grid">
          {recommendations.map((item) => (
            <article className="recommendation-card" key={item.id}>
              <img src={item.image || Meet} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>{item.price.toLocaleString("ru-RU")} ₽</strong>
              <div className="recommendation-actions">
                <button onClick={() => {
                  addToCart(item);
                  navigate("/cart");
                }}>Заказать</button>
                <button className="more" onClick={() => {
                  setSelectedProduct(item);
                  navigate("/card-page", { state: { product: item } });
                }}>Подробнее</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export default CardPage;
