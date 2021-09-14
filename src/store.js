import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import contactReducer from "./reducers/ContactReducer";

// import reducers
import reducers from "./reducers/reducers";

//initial state
const initialState = {};

const middleware = [thunk];

//store
// const store = createStore(
//     reducers,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

const store = createStore(contactReducer, composeWithDevTools());


export default store;