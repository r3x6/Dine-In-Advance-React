import { createSlice } from "@reduxjs/toolkit";

const mainPgSlice = createSlice({
  name: "mainPg",
  initialState: {
    // INPUT STATES REQUIRED FOR THIS PAGE
    // stateName : value
  },
  reducers: {
    // PUT REDUCERS FOR THIS PAGE HERE
    // reducerName(state, action) {
    //   state.stateName = action.payload;
    // },
  },
});

export const mainPgActions = mainPgSlice.actions;

export default mainPgSlice.reducer;
