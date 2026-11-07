import "./style.css";
import Meet from "../../assets/image.png"
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartcontext";
function Products() {
  const navigate = useNavigate();
  const { addToCart, setSelectedProduct } = useCart();

  const handleProductAction = (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const card = button.closest(".product-card");
    const section = button.closest(".product-section");
    if (!card || !section) return;

    const title = card.querySelector("h3")?.textContent?.trim() || "Товар";
    const description = card.querySelector("p")?.textContent?.trim() || "";
    const price = Number((card.querySelector("strong")?.textContent || "0").replace(/[^0-9]/g, ""));
    const product = {
      id: `${section.id}-${title}-${price}`,
      title,
      description,
      price,
      image: card.querySelector("img")?.src || Meet,
    };

    if (button.classList.contains("more")) {
      setSelectedProduct(product);
      navigate("/card-page");
      return;
    }

    addToCart(product);
    navigate("/cart");
  };

  return (
    <section className="products" onClick={handleProductAction}>

      <div className="products-top">
        <h1>Товары</h1>

        <p>
          Наша компания производит поставки
          <br />
          премиальной мраморной говядины, баранины,
          <br />
          утки морепродуктов, рыбы и мясных
          <br />
          полуфабрикатов
        </p>
      </div>

      <div className="categories">
        <a href="#beef">Говядина</a>
        <a href="#pork">Свинина</a>
        <a href="#chicken">Курица</a>
        <a href="#seafood">Морепродукты</a>
      </div>



      <div className="product-section" id="beef">

        <h2>Говядина</h2>

        <div className="product-grid">

          <div className="product-card">
            
            <img src ={Meet} alt="Мраморная говядина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            
            <img src ={Meet} alt="Мраморная говядина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            
            <img src ={Meet} alt="Мраморная говядина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            
            <img src ={Meet} alt="Мраморная говядина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            
            <img src ={Meet} alt="Мраморная говядина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            
            <img src ={Meet} alt="Мраморная говядина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            
            <img src ={Meet} alt="Мраморная говядина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            
            <img src ={Meet} alt="Мраморная говядина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>

        </div>
      </div>



      <div className="product-section" id="pork">

        <h2>Свинина</h2>

        <div className="product-grid">

          <div className="product-card">
            <img src={Meet} alt="Свинина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            <img src={Meet} alt="Свинина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            <img src={Meet} alt="Свинина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            <img src={Meet} alt="Свинина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            <img src={Meet} alt="Свинина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            <img src={Meet} alt="Свинина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            <img src={Meet} alt="Свинина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>


          <div className="product-card">
            
            <img src={Meet} alt="Свинина" />

            <h3>Мраморная говядина 1 кг</h3>
            <p>Описание</p>
            <strong>2000 ₽</strong>

            <div className="product-buttons">
              <button>Заказать</button>
              <button className="more">Подробнее</button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Products;
