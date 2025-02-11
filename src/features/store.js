import { configureStore } from "@reduxjs/toolkit";
import auth from './auth/authslice'

const store = configureStore({
    reducer: {
        auth: auth,
    },
})

export default store;
