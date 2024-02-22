const {createSlice} = require('@reduxjs/toolkit');

const CartSlice = createSlice({
  name: 'Books',
  initialState: [],
  reducers: {
    addBookToCart(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id === action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex === -1) {
        state.push({
          title: action.payload.title,
          id: action.payload.id,
          author: action.payload.author,
          image: action.payload.image,
          price: action.payload.price,
          description: action.payload.description,
          qty: action.payload.qty + 1,
        });
      } else {
        state[myIndex].qty = state[myIndex].qty + 1;
      }
    },

    removeBookToCart(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id === action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex === -1) {
      } else {
        state[myIndex].qty = state[myIndex].qty - 1;
      }
    },

    deleteBookToCart(state, action) {
      return (state = state.filter(item => {
        return item.id !== action.payload;
      }));
    },
  },
});

export const {addBookToCart, removeBookToCart, deleteBookToCart} =
  CartSlice.actions;
export default CartSlice.reducer;
