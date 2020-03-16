const initialState = {
    articles: [],
  };
  
  export function newsReducers(state = initialState, action) {
    switch (action.type) {
      case 'LOAD_NEWS':
        return {
          ...state,
          articles: action.payload,
        };
      case 'ADD_NEWS':
        return {
          ...state,
          articles: [...state.articles, ...action.payload],
        };
      default:
        return state;
    }
  }
  