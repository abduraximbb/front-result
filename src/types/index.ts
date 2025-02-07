// export interface IGetResponseProducts {
//   products: IGetProducts;
//   message: string;
//   statusCode: number;
// }
// export interface IGetProducts {
//   data: IProduct[];
//   limit: number;
//   page: number;
//   total: number;
// }
// export interface IProduct {
//   id: number;
//   brand:string
//   category: string;
//   description: string;
//   images: string[];
//   price: number;
//   rating: number;
//   stock: number;
//   title: string;
//   sku:string
//   tags:string[]
//   thumbnail:string[]
// }
// export interface IProductQuery {
//   filter?: string;
//   order?: "asc" | "desc";
//   page?: number;
//   limit?: number;
//   price?: "asc" | "desc";
// }


export interface IGetResponseProducts {
  data: IGetProducts;
  message: string;
  statusCode: number;
}

export interface IGetProducts {
  products: IProduct[]; // ✅ "data" emas, "products" bo‘lishi kerak
  limit: number;
  skip: number; // ✅ "page" emas, "skip" bo‘lishi kerak
  total: number;
}

export interface IProduct {
  id: number;
  category: string;
  description: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  title: string;
  thumbnail: string[]; 
  reviews:string[]
}

export interface IProductQuery {
  filter?: string;
  order?: "asc" | "desc";
  skip?: number; // ✅ "page" emas, "skip"
  limit?: number;
  price?: "asc" | "desc";
}
