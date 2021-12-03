export const getEvents = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_EVENTS', loading: true})
      fetch('http://localhost:3001/events/').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'GET_EVENTS', events: responseJSON, loading: false })
      })
    }
  }