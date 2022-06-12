import uiSlice from "./reducers/uiSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
})
export default store