import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      toast.success("Checkout successful! Your order is on the way.", {
        toastId: "checkout-toast",
      });
      setCartItems([]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <Steps />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;