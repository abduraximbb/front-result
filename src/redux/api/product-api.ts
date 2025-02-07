// import { IGetProducts, IProduct, IProductQuery } from "@/types";
import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<any, any>({
      query: (params) => ({
        url: "products",
        method: "GET",
        params, // Faqat kerakli joyda params ishlatiladi
      }),
      providesTags: ["PRODUCT"],
    }),

    getProductById: build.query<any, { id: number }>({
      query: ({ id }) => ({
        url: `product/${id}`, // ✅ ID to‘g‘ri o‘rin bosiladi
        method: "GET",
      }),
      providesTags: ( { id }) => [{ type: "PRODUCT", id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = extendedApi;
