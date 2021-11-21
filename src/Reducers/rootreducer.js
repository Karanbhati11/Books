import { combineReducers } from "redux";
import add_reducer from "./add_reducer";

const rootreducer = combineReducers({
  main: add_reducer,
});

export default rootreducer;
