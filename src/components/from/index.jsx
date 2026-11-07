import "./style.css";
import { useCart } from "../../context/cartcontext";
import { useState } from "react";
function Chekout () {
  const { cart, clearCart } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cart.length === 0) return;

    clearCart();
    setOrderComplete(true);
  };

  return (
    <div className="page">

     


      <main className="main">

        <h1>Оформление Заказа</h1>

        <form onSubmit={handleSubmit}>
        <div className="forms">

          <section className="form-block">
            <p className="subtitle">Детали заказа</p>

            <label>Ваше имя</label>
            <input type="text" required />

            <label>Ваш номер</label>
            <input type="tel" required />

            <label>Выбрать способ оплаты</label>
            <select>
              <option>Тинькофф онлайн касса</option>
              <option>Наличными</option>
            </select>
          </section>


          <section className="form-block">
            <p className="subtitle">Детали доставки</p>

            <label>Адрес доставки</label>
            <input type="text" placeholder="Введите адрес" required />

            <label>Комментарий курьеру</label>
            <input type="text" />

            <label>Время доставки</label>
            <input type="text" />
          </section>

        </div>


        <section className="delivery">
          <h2>Выберите зону доставки</h2>

          <div className="zones">

            <div>
              <label>
                <input type="checkbox" />
                г. Невьянск - 2000 руб.
              </label>

              <label>
                <input type="checkbox" />
                село Николо - Павловское - 600 руб.
              </label>

              <label>
                <input type="checkbox" />
                поселок Мунзино - 600 руб.
              </label>

              <label>
                <input type="checkbox" />
                поселок Леневка - 400 руб.
              </label>
            </div>


            <div>
              <label>
                <input type="checkbox" />
                поселок Анатольская - 600 руб.
              </label>

              <label>
                <input type="checkbox" />
                село Шиловка - 1200 руб.
              </label>

              <label>
                <input type="checkbox" />
                поселок Новоасбест - 1500 руб.
              </label>

              <label>
                <input type="checkbox" />
                поселок Первомайский - 2000 руб.
              </label>
            </div>


            <div>
              <label>
                <input type="checkbox" />
                село Краснополье - 2400 руб.
              </label>

              <label>
                <input type="checkbox" />
                село Петрокаменское - 3300 руб.
              </label>

              <label>
                <input type="checkbox" />
                поселок Старатель - 1500 руб.
              </label>
            </div>

          </div>
        </section>


        <section className="order-table">

          <div className="table-head">
            <span>Товар</span>
            <span>Подытог</span>
          </div>

          {cart.length === 0 ? (
            <div className="product">
              <span>Корзина пуста</span>
              <span>0 ₽</span>
            </div>
          ) : cart.map((item) => (
            <div className="product" key={item.id}>
              <span>{item.title} × {item.quantity}</span>
              <span>{item.price * item.quantity} ₽</span>
            </div>
          ))}

          <div className="total-row">
            <span>Подытог</span>
            <strong>{total} ₽</strong>
          </div>

          <div className="total-row">
            <span>Итого</span>
            <strong>{total} ₽</strong>
          </div>

        </section>


        <div className="confirm">
          <button type="submit" disabled={cart.length === 0}>Подтвердить заказ</button>
        </div>
        {orderComplete && (
          <p role="status">
            Заказ подтверждён только в браузере. Магазин не получит его, потому что сервер не подключён.
          </p>
        )}
        </form>
      </main>



    </div>
  );
}

export default Chekout;
