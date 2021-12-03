import React, { Component } from "react";
import { connect } from 'react-redux';
import { getEvents } from '../actions/getEvents';
import { deleteEvent } from '../actions/deleteEvent';
import Events from '../components/Events';
import CurrentDate from "../components/CurrentDate";
import CurrentTime from '../components/CurrentTime';
import EventsHeader from '../components/EventsHeader';
import LowerBanner from '../components/LowerBanner';

class EventsContainer extends Component {


    handleClick = (id) => {
        { const entry = document.querySelector(".event")
          entry.remove(); }
        this.props.deleteEvent(id);
    }

    componentDidMount() {
        this.props.getEvents();
    }
 

    handleLoading = () => {
        console.log(this.props.events)
        if(this.props.loading) {
            return <div>Loading...</div>
        } else {
            return <Events event={this.props.events} />
        }

    }

    render() {
        return(
            <div className="eventContainer">
                <CurrentDate />
                <CurrentTime />
                <EventsHeader />
                {this.handleLoading()}
                <LowerBanner />
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


export default connect(mapStateToProps, {getEvents, deleteEvent})(EventsContainer);