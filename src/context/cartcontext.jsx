import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function loadCart() {
  try {
    const savedCart = localStorage.getItem("level-food-cart");
    if (!savedCart) return [];

    const parsedCart = JSON.parse(savedCart);
    if (!Array.isArray(parsedCart)) {
      throw new Error("Сохранённая корзина должна быть списком товаров.");
    }

    return parsedCart;
  } catch (error) {
    console.error("Не удалось загрузить корзину из браузера:", error);
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("level-food-cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Не удалось сохранить корзину в браузере:", error);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prev) => prev
      .map((item) => item.id === productId ? { ...item, quantity } : item)
      .filter((item) => item.quantity > 0));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      selectedProduct,
      setSelectedProduct,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
