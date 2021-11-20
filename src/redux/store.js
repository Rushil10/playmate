import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import eventReducer from "./events/eventReducer";
import playerReducer from "./player/playerReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  player: playerReducer,
  event: eventReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
