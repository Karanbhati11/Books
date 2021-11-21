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
