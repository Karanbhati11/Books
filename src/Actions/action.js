export const add_books = (input) => {
  return {
    type: "ADD",
    payload: input,
  };
};
export const del_books = (output) => {
  return {
    type: "DEL",
    payload: output,
  };
};
export const search_books = (searchparam) => {
  return {
    type: "SEARCH",
    payload: searchparam,
  };
};
