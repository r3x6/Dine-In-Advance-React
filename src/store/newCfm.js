import { createSlice } from "@reduxjs/toolkit";

const newCfmSlice = createSlice({
  name: "newCfm",
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

export const newCfmActions = newCfmSlice.actions;

export default newCfmSlice.reducer;
