import { createSlice } from "@reduxjs/toolkit";

const mainPgSlice = createSlice({
  name: "mainPg",
  initialState: {
    // INPUT STATES REQUIRED FOR THIS PAGE
    // stateName : value
    name: "",
    phone: "",
    email: "",
    restaurant: "",
    group: 0,
    date: Date.UTC(122, 1, 1),
    time: 0,
  },
  reducers: {
    // PUT REDUCERS FOR THIS PAGE HERE
    // reducerName(state, action) {
    //   state.stateName = action.payload;
    // },
    saveNewBooking(state, action) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.restaurant = action.payload.restaurant;
      state.group = action.payload.group;
      state.date = action.payload.date;
      state.time = action.payload.time;
    },
  },
});

export const mainPgActions = mainPgSlice.actions;

export default mainPgSlice.reducer;
