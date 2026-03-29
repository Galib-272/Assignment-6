import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

// Icon mapping (ensure these paths match your actual assets)
import writingImg from "../assets/products/writing.png";
import designImg from "../assets/products/design-tool.png";
import shoppingImg from "../assets/products/shopping-cart.png";

const iconMap = {
  writing: writingImg,
  design: designImg,
  shopping: shoppingImg,
};

// Simplified tag styles
const tagStyles = {
  new: { bg: "bg-green-50", text: "text-green-600" },
  popular: { bg: "bg-blue-50", text: "text-blue-600" },
  bestseller: { bg: "bg-orange-50", text: "text-orange-600" },
};

const ProductCard = ({ product, onAddToCart, cartItems }) => {
  const isInCart = cartItems.some((item) => item.id === product.id);
  const tagStyle = tagStyles[product.tagType] || tagStyles.new;

  const handleBuyNow = () => {
    if (isInCart) {
      toast.info(`${product.name} is already in your cart!`, { autoClose: 2000 });
      return;
    }
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`, { autoClose: 2000 });
  };

  const productIcon = iconMap[product.icon] || writingImg;

  return (
    <div className="relative bg-white rounded-3xl p-8 border border-gray-100 transition-all duration-300 hover:border-purple-100 shadow-blue-50 hover:shadow-2xl hover:shadow-blue-100">
      
      {/* Badge Tag - Matching image_4.png */}
      {product.tag && (
        <div className="absolute top-6 right-6">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${tagStyle.bg} ${tagStyle.text}`}>
            {product.tag}
          </span>
        </div>
      )}

      {/* Product Icon in a Circle - Matching image_4.png */}
      <div
        className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center mb-8 shadow shadow-gray-100"
        style={{ background: "linear-gradient(135deg, #EEF2FF, #E0E7FF)" }}
      >
        <img src={productIcon} alt={product.name} className="w-8 h-8 object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-extrabold text-[#1E293B] mb-3 leading-tight">
        {product.name}
      </h3>

      {/* Description - Correct Order */}
      <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
        {product.description}
      </p>
      
      {/* Price Block - Placed *above* features */}
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl font-extrabold text-[#1E293B]">
          ${product.price}
        </span>
        {/* Adjusted to /Mo or /One-Time */}
        <span className="text-gray-400 text-sm font-medium">
          /{product.period}
        </span>
      </div>

      {/* Features List - Matching image_4.png */}
      <ul className="space-y-4 mb-10">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
            <div className="shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                <FaCheck size={10} className="text-green-600" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Fixed 'Buy Now' Button - Matching image_4.png */}
      <button
        onClick={handleBuyNow}
        className="w-full py-4 text-center text-white font-bold rounded-full transition-all duration-300 text-base"
        style={{
          background: isInCart
            ? "#10B981" // Green for already in cart
            : "linear-gradient(135deg, #4F39F6, #9514FA)", // Brand colors for active
        }}
      >
        {isInCart ? "✓ Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;