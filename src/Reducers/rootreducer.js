import { combineReducers } from "redux";
import add_reducer from "./add_reducer";
import searchreducer from "./search_reducer";
const rootreducer = combineReducers({
  main: add_reducer,
  search: searchreducer,
});

export default rootreducer;
