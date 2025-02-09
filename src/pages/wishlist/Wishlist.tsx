import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import Products from "../../components/products/Products";
import EmptyWishlist from "./EmptyWishlist";

const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.value);

  // Wishlist-ni IGetProducts formatiga o‘girish
  const data = {
    products: wishlist, // wishlist massivini products sifatida uzatamiz
    total: wishlist.length, // umumiy wishlist mahsulotlari soni
    skip: 0, // wishlist sahifalash ishlatilmaydi, shunchaki 0
    limit: wishlist.length, // hamma mahsulotlarni ko‘rsatish uchun limit qo‘shamiz
  };

  return <>{data.products?.length>0 ? <Products data={data} /> : <EmptyWishlist />}</>;
};

export default Wishlist;
