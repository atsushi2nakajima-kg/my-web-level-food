import { Link } from "react-router-dom";
import { useCart } from "../../context/cartcontext";
import "./style.css";

function CartPage() {
  const { cart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="cart-page">
      <h1>Корзина</h1>
      <div className="cart-layout">
        {cart.length === 0 ? (
          <p className="cart-empty">Корзина пуста</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <strong className="cart-item-price">{item.price} ₽</strong>
                <div className="cart-item-actions">
                  <Link className="cart-order" to="/product">Заказать</Link>
                  <div className="cart-item-controls">
                    <button aria-label={`Уменьшить количество ${item.title}`} onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button aria-label={`Увеличить количество ${item.title}`} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <aside className="cart-summary">
          <div className="cart-summary-row">
            <strong>Сумма товаров:</strong>
            <span>{total.toLocaleString("ru-RU")} ₽</span>
          </div>
          <div className="cart-summary-row">
            <strong>Количество:</strong>
            <span>{quantity} шт.</span>
          </div>
          <div className="cart-summary-total">
            <strong>Итого:</strong>
            <span>{total.toLocaleString("ru-RU")} ₽</span>
          </div>
                  <Link className="cart-checkout" to="/order">Оформить заказ</Link>
        </aside>
      </div>
    </main>
  );
}

export default CartPage;
