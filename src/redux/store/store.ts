import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slice/counterSlice";
import { getData } from "../reduxQuery/query";
import { setupListeners } from "@reduxjs/toolkit/query";

 export const ourStore = configureStore({
    reducer:{
        counter: reducer,
        [getData.reducerPath]: getData.reducer
        
    }, 
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getData.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ourStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof ourStore.dispatch
setupListeners(ourStore.dispatch)
