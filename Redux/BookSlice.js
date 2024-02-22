const { createSlice } = require("@reduxjs/toolkit");

const BookSlice= createSlice({
    name:"Books",
    initialState:[],
    reducers:{
        addBooks(state,action){
            state.push(action.payload)
        }
    }
})

export const {addBooks}= BookSlice.actions;
export default BookSlice.reducer;