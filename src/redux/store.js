
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./state-slice/product-slice";
import settingSlice from "./state-slice/setting-slice";










const store = configureStore({
    reducer: {
        product: productSlice,
        setting: settingSlice
    }
})





export default store;































