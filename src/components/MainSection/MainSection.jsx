import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Cart from "../Cart/Cart";

const MainSection = ({ cartItems, onAddToCart, onRemove, onCheckout }) => {
  const [activeTab, setActiveTab] = useState("products");
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <section className="py-24 px-4 md:px-10 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-5xl font-extrabold text-[#1E293B] mb-4 leading-tight">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>

          <div className="inline-flex items-center p-1.5 bg-white border border-gray-100 rounded-full shadow-inner shadow-gray-50 mt-10">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-10 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "products"
                  ? "text-white shadow-xl shadow-blue-100"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              style={
                activeTab === "products"
                  ? { background: "linear-gradient(135deg, #4F39F6, #9514FA)" }
                  : {}
              }
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-10 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "cart"
                  ? "text-white shadow-xl shadow-blue-100"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              style={
                activeTab === "cart"
                  ? { background: "linear-gradient(135deg, #4F39F6, #9514FA)" }
                  : {}
              }
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {activeTab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                cartItems={cartItems}
              />
            ))}
          </div>
        ) : (
          <Cart
            cartItems={cartItems}
            onRemove={onRemove}
            onCheckout={onCheckout}
          />
        )}
      </div>
    </section>
  );
};

export default MainSection;
