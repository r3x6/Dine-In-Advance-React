import { configureStore } from "@reduxjs/toolkit";

import mainPgReducer from "./mainPg";
import newCfmReducer from "./newCfm";
import editPgReducer from "./editPg";
import editCfmReducer from "./editCfm";

const store = configureStore({
  reducer: {
    mainPg: mainPgReducer,
    newCfm: newCfmReducer,
    editPg: editPgReducer,
    editCfm: editCfmReducer,
  },
});

export default store;
