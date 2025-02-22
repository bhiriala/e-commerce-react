import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createCart = createAsyncThunk("cart/createCart", async () => {
    const response = await fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ total: 0, subTotal: 0, tax: 0, items: [] }),
    });
    if (!response.ok) throw new Error("Erreur lors de la création du panier");
    const result = await response.json();
    localStorage.setItem("cartId", result.id);
    return result.id;
});

export const fetchCartData = createAsyncThunk("cart/fetchCartData", async (cartId) => {
    const response = await fetch(`http://localhost:3000/carts/${cartId}`);
    if (!response.ok) throw new Error("Erreur lors du chargement du panier");
    return await response.json();
});

export const updateItemQuantity = createAsyncThunk("cart/updateItemQuantity", async ({ cartId, itemId, qty }) => {
    const response = await fetch(`http://localhost:3000/carts/${cartId}`);
    if (!response.ok) throw new Error("Erreur lors de la récupération du panier");
    const cart = await response.json();

    const itemToUpdate = cart.items.find(item => item.id === itemId);
    if (!itemToUpdate) throw new Error("Article non trouvé");

    itemToUpdate.qty = qty;
    cart.total = cart.items.reduce((total, item) => total + (item.price * (1 - item.discountRate / 100)) * item.qty, 0);
    cart.subTotal = cart.total;

    const updateResponse = await fetch(`http://localhost:3000/carts/${cartId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cart),
    });

    if (!updateResponse.ok) throw new Error("Erreur mise à jour du panier");
    return await updateResponse.json();
});

export const removeItemFromCart = createAsyncThunk("cart/removeItemFromCart", async ({ cartId, itemId }) => {
    const response = await fetch(`http://localhost:3000/carts/${cartId}`);
    if (!response.ok) throw new Error("Erreur récupération du panier");
    const cart = await response.json();

    cart.items = cart.items.filter(item => item.id !== itemId);
    cart.total = cart.items.reduce((total, item) => total + (item.price * (1 - item.discountRate / 100)) * item.qty, 0);
    cart.subTotal = cart.total;

    const updateResponse = await fetch(`http://localhost:3000/carts/${cartId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cart),
    });

    if (!updateResponse.ok) throw new Error("Erreur suppression article");
    return await updateResponse.json();
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
            state.cartData.total += (action.payload.price * (1 - action.payload.discountRate / 100)) * action.payload.qty;
            state.cartData.subTotal = state.cartData.total;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCart.fulfilled, (state, action) => { state.cartId = action.payload; })
            .addCase(fetchCartData.fulfilled, (state, action) => { state.cartData = action.payload; state.loading = false; })
            .addCase(updateItemQuantity.fulfilled, (state, action) => { state.cartData = action.payload; })
            .addCase(removeItemFromCart.fulfilled, (state, action) => { state.cartData = action.payload; });
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
