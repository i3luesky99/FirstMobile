const initialState = {
  hair: true,
  type: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {...state, hair: !state.hair, type: !state.type};
    case 'DECREASE':
      return {...state, type: !state.type, hair: !state.hair};
    default:
      return state;
  }
};
export default counterReducer;
