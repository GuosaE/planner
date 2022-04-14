import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/addEvent';


class EventInput extends Component {


    constructor() {
      super()
      this.state = {
        day: '',
        location: '',
        name: '',
        importance: '',
        category: '',
      }
    }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  
  handleSubmit = (e) => {
      e.preventDefault();
      const day = this.state.day
      const location = this.state.location
      const name = this.state.name
      const importance = this.state.importance
      const category = this.state.category
      const event = {
              day: day,
              location: location,
              name: name,
              importance: importance,
              category: category
          }

      this.props.addEvent(event)

      this.setState({
          day: '',
          location: '',
          name: '',
          importance: '',
          category: '',
      })
      this.props.history.push("/events");
  };  

  

  render() {
      return (
              <div className="inputForm">
                  <br></br>
                  <h3 id="input-header"><strong>Enter your planned activities for the week below!</strong></h3>
                  <div id="input-lower-half"></div>
                  <br></br>
                  <form onSubmit={this.handleSubmit} className="activity-inputs">
                      <input type="text" name="day" placeholder="Enter the Day of the Week" id="day" value={this.state.day} onChange={this.handleChange} />
                      <br></br>
                      <br></br>
                      <input type="text" name="location" placeholder="Enter Location" id="location" value={this.state.location} onChange={this.handleChange} />
                      <br></br>
                      <br></br>
                      <input type="text" name="name" placeholder="Enter Name of Activity" id="name" value={this.state.name} onChange={this.handleChange} />
                      <br></br>
                      <br></br>
                      <input type="text" name="importance" placeholder="Describe Importance" id="importance" value={this.state.importance} onChange={this.handleChange} />
                      <br></br>
                      <br></br>
                      <input type="text" name="category" placeholder="Enter Category" id="category" value={this.state.category} onChange={this.handleChange} />
                      <br></br>
                      <br></br>
                      <div>
                          <input type="submit" value="Submit" id="submit" />
                      </div>
                  </form>
                  <br></br>
              </div>
          );
      };
}


const mapStateToProps = state => {
  return {
      events: state.events,
      loading: state.loading,
  };
};

export default connect(mapStateToProps, { addEvent })(EventInput);