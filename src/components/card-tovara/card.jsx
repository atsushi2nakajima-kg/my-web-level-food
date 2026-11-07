import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartcontext";
import "./card.css";

const Card = () => {
  const { addToCart, setSelectedProduct } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 1,
    title: "Мраморная говядина 1 кг",
    description: "Описание",
    price: 2000,
    image: "/images/meat.jpg",
  };

  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.title}
        className="card-img"
      />

      <div className="card-info">

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <h4>{product.price} ₽</h4>

        <div className="card-btns">

          <button
            className="order"
            onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
          >
            Заказать
          </button>

          <button className="more" onClick={() => {
            setSelectedProduct(product);
            navigate("/card-page");
          }}>
            Подробнее
          </button>

        </div>

      </div>
    </div>
  );
};

export default Card;
