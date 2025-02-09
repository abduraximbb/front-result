import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { RiLoopLeftLine } from "react-icons/ri";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toggleLike } from "../../redux/features/wishlist-slice";
import { IProduct } from "../../types";
import { Loading } from "../loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
const ProductDetail = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}product/${id}`
        );
        const productData = await response.json();

        if (productData && productData.id) {
          setProduct(productData); // ❗️Mahsulotni saqlaymiz
          setSelectedImage(`${productData.images[0]}`);
        } else {
          throw new Error("No product data found in response");
        }
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProduct();
  }, [id]); // ❗️id o'zgarsa, yangi mahsulot yuklanadi

  if (!product) {
    return <Loading />;
  }
  const isLiked = wishlist.some((item) => item.id === product.id);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <TiStarFullOutline key={i} className="text-yellow-500 text-lg" />
        );
      } else if (i - rating > 0 && i - rating < 1) {
        stars.push(
          <TiStarHalfOutline key={i} className="text-yellow-500 text-lg" />
        );
      } else {
        stars.push(<TiStarOutline key={i} className="text-gray-400 text-lg" />);
      }
    }
    return stars;
  };

  return (
    <motion.div
      className="container mx-auto  mb-[94px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="py-20 font-poppins-medium text-sm text-primary max-lg:py-14 max-md:py-10">
        <span className="text-[#808080]">{product.category} / </span>{" "}
        {product.title}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr] gap-4 ">
          {/* Chap tarafdagi kichik rasmlar */}
          <div className="flex flex-col space-y-2 overflow-y-auto scrollbar-hide max-[1025px]:flex-row max-[1025px]:space-x-2 max-[1025px]:overflow-y-auto">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={`${img}`}
                alt={`Thumbnail ${index + 1}`}
                className={`w-24 h-24 object-cover rounded-md cursor-pointer border-2 hover:border-blue-500 transition-all duration-200 bg-[#F5F5F5] ${
                  selectedImage.includes(img)
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(`${img}`)}
              />
            ))}
          </div>

          {/* O'ng tarafdagi katta rasm */}
          <div className="overflow-hidden rounded-xl ">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-full object-cover bg-[#F5F5F5]"
            />
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-black">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center space-x-2">
            {renderStars(product.rating)}
            <span className="text-gray-600 text-sm">
              ({product.reviews.length} reviews)
            </span>
          </div>
          <p className="text-2xl font-inter-medium text-primary mt-4">
            $ {product.price}
          </p>

          <p className="text-primary text-sm font-poppins-medium dark:text-black mt-4 ">
            {product.description}
          </p>
          <hr className="border-t-1 border-black my-6" />

          <div className="flex items-center gap-6">
            <span className="font-inter-medium text-xl">Colours:</span>
            <div className="flex items-center space-x-4">
              {["#000", "#FAFAFA"].map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="mt-[30px] flex gap-6 items-center">
            <span className="font-inter-medium text-xl text-primary dark:text-black">
              Size:
            </span>
            <div className="flex items-center space-x-3 gap-4">
              {["XS", "S", "M", "L", "XL"].map((size, index) => (
                <button
                  key={index}
                  className="w-8 h-8 border-[1px] border-[#808080] rounded-[4px] hover:bg-[#DB4444] hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center space-x-6">
            <div className="flex items-center border border-[#808080] rounded-[4px] overflow-hidden">
              <button
                className="px-4 py-2 text-lg font-semibold bg-white  border-r border-[#808080] hover:bg-[#DB4444] hover:text-white"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
              <span className="px-6 text-lg font-semibold">{quantity}</span>
              <button
                className="px-4 py-2 text-lg font-semibold bg-white border-l border-[#808080] hover:bg-[#DB4444] hover:text-white"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button className="px-6 w-[160px] py-[10px] text-primary border rounded-lg border-[#808080] hover:bg-[#DB4444] hover:text-white">
              Buy Now
            </button>
            <button
              onClick={() => dispatch(toggleLike(product))}
              className="w-10 h-10 flex items-center justify-center border border-[#808080] rounded-[4px] hover:bg-gray-100 transition"
            >
              {isLiked ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>

          <div className="mt-6 border border-gray-400 rounded-lg">
            {/* Free Delivery */}
            <div className="flex items-center justify-between p-4 border-b border-gray-400">
              <div className="flex items-center space-x-4">
                <TbTruckDelivery className="text-2xl text-black" />
                <div>
                  <p className="font-medium text-black">Free Delivery</p>
                  <p className="text-sm text-black">
                    <a href="#" className="underline">
                      Enter your postal code for Delivery Availability
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Return Delivery */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <RiLoopLeftLine className="text-2xl text-black" />
                <div>
                  <p className="font-medium text-black">Return Delivery</p>
                  <p className="text-sm text-black">
                    Free 30 Days Delivery Returns.{" "}
                    <a href="#" className="underline">
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
