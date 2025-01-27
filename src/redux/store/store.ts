import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slice/counterSlice";

 export const ourStore = configureStore({
    reducer:{
        counter: reducer
    } 
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ourStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof ourStore.dispatch

