import { useNavigate } from "react-router-dom";
import noProduct from "../../assets/images/product_not_found.jpeg"

const EmptyWishlist = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center h-[450px]">
        <div className="h-[300px] w-[300px]"><img src={noProduct} alt=""  className="w-full h-full"/></div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bg-primary mb-4">
        Your Wishlist is Empty
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6">
        Explore our collection and add your favorite items to your wishlist!
      </p>
      <button
        className="px-4 sm:px-6 py-2 sm:py-3 bg-bg-primary text-primary rounded-lg shadow hover:bg-yellow-700 transition duration-300"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
};

export default EmptyWishlist;
