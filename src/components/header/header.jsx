import React from 'react';
import './style.css'
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { useCart } from "../../context/cartcontext";
const Header = () => {
    const { cart } = useCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
            <header className="header">
                <div className="logo">
                    <div className="logo-icon"><img src={Logo} alt="Level Food — Premium marble beef" /></div>
                </div>

                <nav>
                    <Link to="/company">О компании</Link>
                    <Link to="/product">Товары</Link>
                    <Link to="/certificates">Сертификаты</Link>
                </nav>

                <div className="header-right">
                    <Link to="/cart" className="cart" aria-label={`Корзина, товаров: ${cartCount}`}>
                        <svg
                            className="cart-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.5L22 8H6" />
                            <circle cx="10" cy="20" r="1" />
                            <circle cx="18" cy="20" r="1" />
                        </svg>
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>
                    <Link to="/product" className="header-order">Заказать</Link>
                </div>
            </header>
        </div>
    );
}

export default Header;
