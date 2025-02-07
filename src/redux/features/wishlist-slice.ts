import { IProduct } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const STORAGE_KEY = "wishlist";

// LocalStorage dan wishlist olish funksiyasi
const getStoredWishlist = (): IProduct[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Wishlistni localStorage ga saqlash funksiyasi
const saveWishlist = (wishlist: IProduct[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
};

// **🚀 To‘g‘ri holat formati: obyekt**
interface WishlistState {
  value: IProduct[];
}

const initialState: WishlistState = {
  value: getStoredWishlist(),
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState, // ✅ Obyekt formatida berildi
  reducers: {
    toggleLike: (state, action: PayloadAction<IProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.value.push(action.payload);
      } else {
        state.value.splice(index, 1);
      }
      saveWishlist(state.value);
    },
    clearWishlist: (state) => {
      state.value = []; // ✅ Redux Toolkit uchun mutatsiya orqali yangilash
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});

export const { toggleLike, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
