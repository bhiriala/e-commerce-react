import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createCart = createAsyncThunk("cart/createCart", async () => {
    const response = await fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ total: 0, subTotal: 0, tax: 0, items: [] }),
    });
    if (!response.ok) throw new Error("Erreur lors de la création du cart");
    const result = await response.json();
    localStorage.setItem("cartId", result.id);
    return result.id;
});

export const fetchCartData = createAsyncThunk("cart/fetchCartData", async (cartId) => {
    const response = await fetch(`http://localhost:3000/carts/${cartId}`);
    if (!response.ok) throw new Error("Erreur lors du chargement du cart");
    return await response.json();
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartId: localStorage.getItem("cartId") || null,
        cartData: null,
        loading: false,
        error: null,
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartData.items.push(action.payload);
            state.cartData.total += action.payload.price * action.payload.qty ;
            state.cartData.subTotal  += action.payload.price * action.payload.qty ;
        },
        removeFromCart: (state, action) => {
            state.cartData.items = state.cartData.items.filter(item => item.id !== action.payload);
            state.cartData.total -= action.payload.price * action.payload.qty ;
            state.cartData.subTotal  -= action.payload.price * action.payload.qty ;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCart.fulfilled, (state, action) => {
                state.cartId = action.payload;
            })
            .addCase(fetchCartData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCartData.fulfilled, (state, action) => {
                state.cartData = action.payload;
                state.loading = false;
            })
            .addCase(fetchCartData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
