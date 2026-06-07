import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "appSlice",

  initialState: {
    firsttName: 'Clement',
    lasttName: 'Kenny',
    friends: ['Akorede'],
    count: 0
  },

  reducers: {
    increaseCount: (state) => {
  state.count++;
},

   increaseCountByFive: (state) => {
  state.count+=5;
},

decreaseCount: (state) => {
  state.count--;
},

increaseCountByNum: (state, action)=>{

  state.count=state.count+action.payload
},

addFriend: (state, action)=>{

  state.friends.push(action.payload)

},
removeFriend: (state, action) => {
  state.friends = state.friends.filter((_, idx) => idx !== action.payload);
},

editFriend: (state, action) => {
  const { index, name } = action.payload;
  state.friends[index] = name;
},

  },
});



export const { increaseCount, decreaseCount, increaseCountByFive, increaseCountByNum, addFriend, removeFriend, editFriend} = appSlice.actions;

export default appSlice.reducer;