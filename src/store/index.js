import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: themeSlicer.reducer
})
export default store