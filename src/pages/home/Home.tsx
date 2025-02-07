import Products from "../../components/products/Products";
import Skeleton from "../../components/products/Skeleton";
import { useGetProductsQuery } from "../../redux/api/product-api";
import Hero from "./Hero"

const Home = () => {
  const { data, isLoading } = useGetProductsQuery({});
  
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Hero />
          {data && (
            <Products
              data={data}
             
            />
          )}
        </>
      )}
    </>
  );
}

export default Home