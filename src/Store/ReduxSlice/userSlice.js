import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        name: "ruwanaaz"
    }
};

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        addUser:(state = initialState, action)=>{
            state.user = action.payload;
        },
        removeUser:(state = initialState, action)=>{
            state.user = action.payload;
        }
    }
})

export const {addUser, removeUser} = userSlice.actions;
export const userSelector = createSelector(
    [(store)=>store.user.user],
    (user)=> user
);
export default userSlice.reducer;