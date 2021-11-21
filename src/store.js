import { createStore } from "redux";
import rootreducer from "./Reducers/rootreducer";
const store = createStore(rootreducer);

export default store;
