import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

// Basket Item Shape
export type BasketItem = {
  id: number;
  category: string;
  url: number; //Node Require statements resolve to a number
  name: string;
  price: number;
  quantity: number;
  isLiked: boolean;
};

// Initial Shopping Basket State Type
type BasketState = {
  items: BasketItem[];
  favouriteItems: BasketItem[];
};

// Initial Basket State variable
const initialState: BasketState = {
  items: [],
  favouriteItems: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Add Item Reducer
    addItem: (state, action: PayloadAction<BasketItem>) => {
      const item = action.payload; //Item
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity; //Add items to the basket
      } else {
        state.items.push(item);
      }
    },

    //Add Item to Favorite Reducer
    addItemToFavourite: (state, action: PayloadAction<BasketItem>) => {
      const item = action.payload;
      const existingItem = state.favouriteItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.favouriteItems.push(item);
      }
    },

    // Remove Item Reducer
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Remove Favorite Item Reducer
    removeItemToFavourite: (state, action: PayloadAction<number>) => {
      state.favouriteItems = state.favouriteItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // Clear Shopping Basket Reducer
    clearBasket: (state) => {
      state.items = [];
    },

    updateLikeStatus: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      // Update item itself outside of the favorite basket
      state.items = state.items.map(
        (item) => (item.id === id ? { ...item, isLiked: !item.isLiked } : item) //Update isLiked var
      );
      // Update item itself inside of the favorite basket
      state.favouriteItems = state.favouriteItems.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item
      );
    },
  },
});

// Export basket store actions
export const {
  addItem,
  addItemToFavourite,
  removeItem,
  removeItemToFavourite,
  clearBasket,
  updateLikeStatus,
} = basketSlice.actions;

const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
