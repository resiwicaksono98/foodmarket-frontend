import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  current,
} from "@reduxjs/toolkit";
import instanceRequest from "../utils/axiosInstance";

// Update Cart
export const updateCart = createAsyncThunk(
  "cart/update",
  async (cart, thunkAPI) => {
    try {
      const res = await instanceRequest.put("/carts", {
        items: cart,
      });
      return res.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// Get Current Cart
export const getCurrentCart = createAsyncThunk(
  "cart/getCurrentCart",
  async (cart, thunkAPI) => {
    try {
      const response = await instanceRequest.get("/carts");
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

const cartEntitiy = createEntityAdapter({
  selectId: (cartItem) => cartItem.product,
});

// Add To Cart
export const cartSlice = createSlice({
  name: "cart",
  initialState: cartEntitiy.getInitialState({
    items: [],
    countOrder: 0,
    shipping: 15000,
    total: 0,
    isLoading: false,
    message: null,
    address: null,
    isErrors: false,
  }),
  reducers: {
    resetCart(state) {
      state.items = [];
      state.countOrder = 0;
      state.total = 0;
      state.message = null;
      state.address = null;
      cartEntitiy.getInitialState();
    },
    addToCart(state, action) {
      const checkid = state.ids.find((id) => id === action.payload.order._id);
      if (checkid) {
        state.message = {
          error: 1,
          message: `${action.payload.order.name} is already in cart`,
        };
        return undefined;
      }
      state.countOrder = state.countOrder + action.payload.counter;
      state.ids.push(action.payload.order._id);
      state.items.push({
        qty: action.payload.qty,
        product: action.payload.order,
      });
      state.subTotal = state.items.reduce(
        (sum, item) => sum + item.product.price,
        0
      );
    },
    incrementCart(state, action) {
      state.items.map((item) => {
        item.product._id === action.payload.id ? (item.qty += 1) : "";
        state.message = `Success Add value ${action.payload.name}`;
        item.price = item.qty * item.product.price;
      });
    },
    decrementCart(state, action) {
      state.items.map((item) => {
        item.product._id === action.payload.id
          ? item.qty <= 1
            ? false
            : (item.qty -= 1)
          : "";
        item.price = item.qty * item.product.price;
      });
    },
    addAddress(state, action) {
      state.address = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    // Update Cart
    builder.addCase(updateCart.fulfilled, (state, action) => {
      cartEntitiy.setAll(state, action.payload);
    });
    builder.addCase(updateCart.rejected, (state, action) => {
      state.message = action.payload;
    });
    // Get Current Cart
    builder.addCase(getCurrentCart.pending, (state, action) => {
      state.message = "Loading....";
      state.isLoading = true;
    }),
      builder.addCase(getCurrentCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.countOrder = action.payload.length;
        state.isLoading = false;
      });
    builder.addCase(getCurrentCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isErrors = true;
    });
  },
});

export const {
  incrementCart,
  decrementCart,
  addToCart,
  addAddress,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
