import React, { useEffect } from "react";


function CurrentTime() {
  

    useEffect(() => {

        const showTime = document.querySelector(".timeBanner");
        const date = new Date();
        const hour = date.getHours();
        let minutes = date.getMinutes();
        let regularTime = "";
        let meridiem = "";

        if (hour > 0 && hour < 12) {
            meridiem = "AM";
        } else if (hour === 12 && minutes > 0) {
            meridiem = "PM"
        } else if (hour > 12 && hour < 24) {
            meridiem = "PM";
        } else if (hour === 0 || hour === 24) {
            meridiem = "AM";
        }

        if (hour > 0 && hour <= 12) {
            regularTime = "" + hour;
        } else if (hour > 12) {
            regularTime = "" + (hour - 12);
        } else if (hour === 0) {
            regularTime = "12";
        }

        if (minutes >= 0 && minutes < 10) {
            minutes = "0" + minutes
        } 

        showTime.innerText = `${regularTime} : ${minutes} ${meridiem}`;
        
    });

    
    return (
        <div className="timeContainer">
            <div className="timeBanner"> 
            </div> 
            <h1>Weekly Planner</h1>
        </div>
    );

   
}
    

export default CurrentTime;