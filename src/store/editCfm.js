import { createSlice } from "@reduxjs/toolkit";

const editCfmSlice = createSlice({
  name: "editCfm",
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

export const editCfmActions = editCfmSlice.actions;

export default editCfmSlice.reducer;
