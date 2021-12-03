class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events
    end
    
        
    def show
        event = Event.find(params[:id])
        render json: event
    end
    
        
    def create
        event = Event.new(event_params)
        if event.save
            render json: event
        else
            render json: {message: "Error"}
        end
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        render json: {message: "Event has been deleted."}
    end
    
    private
    def event_params
        params.require(:event).permit(:day, :location, :name, :importance, :category)
    end

end
