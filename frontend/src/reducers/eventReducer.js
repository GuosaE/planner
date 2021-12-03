const eventReducer = (state = { events: [], loading: false }, action) => {
    switch (action.type) {
  
      case "LOADING_EVENTS":
        return {
          ...state,
          events: [...state.events],
          loading: true,
        };
  
      case "GET_EVENTS":
        return {
          ...state,
          events: action.events,
          loading: false,
        };

      case "START_ADD_EVENT":
        return {
          ...state,
          events: [...state.events],
          loading: true,
        };
  
      case "ADD_EVENT":
        return {
          ...state,
          events: [...state.events, action.payload],
          loading: false,
        };
  
      case "DELETE_EVENT":
          const events = state.events.filter(event => event.id !== action.id);
        return { events };
  
      default:
        return state;
    }
  };
  
  export default eventReducer;