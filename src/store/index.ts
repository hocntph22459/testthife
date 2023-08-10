import { configureStore} from "@reduxjs/toolkit";
import { productAPI } from "../services/product";

export const store = configureStore({
    reducer:{
        [productAPI.reducerPath] : productAPI.reducer
    },
    middleware: (abc) => abc().concat(productAPI.middleware),
})


