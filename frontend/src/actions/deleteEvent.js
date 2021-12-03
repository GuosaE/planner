export function deleteEvent(id){
    return (dispatch) => {
      dispatch({ type: 'LOADING_EVENTS'})
       fetch(`http://localhost:3001/events/${id}`, {
        method: 'DELETE'
      }).then(response => response.json())
      .then(() => {
        dispatch({ type: 'DELETE_EVENT', id })
      })
    }
  }