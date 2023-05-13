import { combineReducers, configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import resultReducer from "./resultReducer";

const reducers = combineReducers({result: resultReducer})

const store = configureStore({reducer: reducers,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    })
})
export default store