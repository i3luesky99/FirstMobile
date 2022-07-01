const initialState = {
  items: [],
  
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        items: [...state.items, action.data],
      };
    default:
      return state;
  }
};

export default itemReducer;
