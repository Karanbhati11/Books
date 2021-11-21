const initialstate = {
  myarray: [],
  id: "",
};

const addreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD":
      return {
        myarray: action.payload,
      };

    case "DEL":
      return {
        id: action.payload,
      };
    default:
      return state;
  }
};

export default addreducer;
