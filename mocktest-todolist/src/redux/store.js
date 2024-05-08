import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./featrues/add/addSlice";
import authReducer from "./featrues/auth/authSlice";
import deleteReducer from "./featrues/delete/deleteSlice";
import fetchReducer from "./featrues/fetchList/fetchSlice";

export default configureStore({
  reducer: {
    add: addReducer,
    auth: authReducer,
    delete: deleteReducer,
    fetch: fetchReducer,
  },
});
