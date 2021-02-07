import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducers";
import { AppAction } from "./types/actions";

const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

// Define middleware to use in Redux Store
const middleware = [thunk as ThunkMiddleware<RootState, AppAction>];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof reducer>;

export default store;
