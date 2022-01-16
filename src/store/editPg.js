import { createSlice } from "@reduxjs/toolkit";

const editPgSlice = createSlice({
  name: "editPg",
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

export const editPgActions = editPgSlice.actions;

export default editPgSlice.reducer;
