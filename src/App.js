import { useState } from "react";
import Header from "./components/Layout/Header";
import Sweets from "./components/Sweets/Sweets";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import "../src/theme/theme.module.css";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Sweets />
      </main>
    </CartProvider>
  );
}

export default App;
