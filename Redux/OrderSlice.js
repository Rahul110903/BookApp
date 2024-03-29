const {createSlice} = require('@reduxjs/toolkit');

const OrderSlice = createSlice({
  name: 'Orders',
  initialState:{
    data:[]
  },
  reducers: {
    orderItem(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const {orderItem} = OrderSlice.actions;
export default OrderSlice.reducer;
