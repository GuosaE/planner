export function addEvent(data){
    return (dispatch) => {
      dispatch({ type: "START_ADD_EVENT"})
       fetch('http://localhost:3001/events/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(response => response.json())
      .then(newData => {
      return dispatch({ type: "ADD_EVENT", payload: newData })
      })
    }
  }