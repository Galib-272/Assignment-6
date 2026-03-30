import writingImg from "../../assets/products/writing.png";
import designImg from "../../assets/products/design-tool.png";
import portfolioImg from "../../assets/products/portfolio.png";
import operationImg from "../../assets/products/operation.png";
import shoppingImg from "../../assets/products/shopping-cart.png";
import socialImg from "../../assets/products/social-media.png";
import { BsCartX } from "react-icons/bs";
import { toast } from "react-toastify";

const iconMap = {
  writing: writingImg,
  design: designImg,
  portfolio: portfolioImg,
  operation: operationImg,
  shopping: shoppingImg,
  social: socialImg,
};

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (item) => {
    onRemove(item.id);
    toast.error(`${item.name} removed from cart`, { autoClose: 2000 });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
        <h3 className="text-2xl font-extrabold text-[#1E293B] mb-8 text-left">
          Your Cart
        </h3>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-gray-400">
            <BsCartX size={80} className="mb-6 text-gray-200" />
            <p className="text-xl font-semibold text-gray-500">
              Your cart is empty
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50/50 border border-gray-100 rounded-2xl px-8 py-6"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <img
                        src={iconMap[item.icon]}
                        alt={item.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#1E293B] text-lg">
                        {item.name}
                      </p>
                      <p className="text-gray-400 font-medium">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(item)}
                    className="text-red-400 hover:text-red-500 font-bold text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
              <span className="text-gray-400 font-medium text-lg">Total:</span>
              <span className="text-4xl font-black text-[#1E293B]">
                ${total}
              </span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full mt-8 text-white font-bold rounded-full py-5 text-lg transition-all hover:opacity-90 shadow-lg shadow-blue-100"
              style={{
                background: "linear-gradient(135deg, #4F39F6, #9514FA)",
              }}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
