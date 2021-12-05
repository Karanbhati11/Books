const initialstate = {
  searchparam1: "",
};

const searchreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        searchparam1: action.payload,
      };
    default:
      return state;
  }
};

export default searchreducer;
