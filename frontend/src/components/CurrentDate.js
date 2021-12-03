import React, { useEffect } from "react";


function CurrentDate() {
  

    useEffect(() => {

        const showDate = document.querySelector(".dateBanner");
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        showDate.innerText = `${formattedDate}`;
        
    });

    
    return (
        <div>
            <br></br>
            <div className="dateBanner"> 
            </div> 
        </div>
    );

   
}
    

export default CurrentDate;