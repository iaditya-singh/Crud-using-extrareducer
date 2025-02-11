import { createSlice } from "@reduxjs/toolkit";


const authslice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: "",

    },
    reducers: {},
    extraReducers: (builder) => { },
})

export default authslice.reducer;