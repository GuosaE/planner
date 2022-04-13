import React, { Component } from "react";
import { connect } from 'react-redux';
import { deleteEvent } from '../actions/deleteEvent';


class Events extends Component {

    handleClick = (id) => {
        { const entry = document.querySelector(".event")
          entry.remove(); }
        this.props.deleteEvent(id);
    }

    listEvents = () => {
        console.log(this.props.events)
        return this.props.events.map((event) => {
            return(
              <table className="event">
              <div align="center">
              <thead>
                      <th>{event.day}</th>
              </thead>
              <tbody>
                      <td event={event} key={event.id}>
                      <br></br>
                      <label className="location"><strong>Location:</strong> {event.location}</label>
                      <br></br>
                      <label className="name"><strong>Description:</strong> {event.name}</label>
                      <br></br>
                      <label className="importance"><strong>Importance:</strong> {event.importance}</label>
                      <br></br>
                      <label className="category"><strong>Category:</strong> {event.category}</label>
                      <br></br>
                        <button className="deleteButton" onClick={() => this.handleClick(event.id)}>Delete</button>
                      </td>
              </tbody>
              </div>
              </table>
            )
          })
    }


    render() {
        return (
          <div>
            {this.listEvents()}
          </div>
        )
      }

}

const mapStateToProps = state => {
    return {
        events: state.events,
        loading: state.loading,
    };
};

export default connect(mapStateToProps, {deleteEvent})(Events);
