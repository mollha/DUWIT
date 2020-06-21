import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '../styles/main.scss' 

// Calendar ID: l8kg3r6d4ar7cff11jqqhkqahk@group.calendar.google.com
// key id: b442373c68dbd163643e964efc1e98ba331790cd


// let calendarEl = document.getElementById('calendar');

// let calendar = new Calendar(calendarEl, {
//     plugins: [ googleCalendarPlugin ],
//     googleCalendarApiKey: 'b442373c68dbd163643e964efc1e98ba331790cd',
//     events: {
//         googleCalendarId: 'l8kg3r6d4ar7cff11jqqhkqahk@group.calendar.google.com'
//         }
//     });
              


// Class for Calendar Page Layout

class EventsCalendar extends React.Component {
    
    render = () => (
        <div>
            <a>CALENDAR!</a>
            <div id="calendar">
                <link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
                <link href='node_modules/@fullcalendar/daygrid/main.css' rel='stylesheet' />
                <script src="http://fullcalendar.io/js/fullcalendar-2.7.1/lib/moment.min.js"></script>
                <script src="http://fullcalendar.io/js/fullcalendar-2.7.1/lib/jquery.min.js"></script>
                <script src="http://fullcalendar.io/js/fullcalendar-2.7.1/fullcalendar.min.js"></script>
                <link rel='stylesheet' type="text/css" href='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.7.1/fullcalendar.min.css'/>
  
                <FullCalendar   defaultView = "dayGridMonth" 
                                plugins = { [googleCalendarPlugin, dayGridPlugin] } 
                                googleCalendarApiKey = 'b442373c68dbd163643e964efc1e98ba331790cd'
                                // events = { [ googleCalendarId = 'l8kg3r6d4ar7cff11jqqhkqahk@group.calendar.google.com' ] } 
                                />
            </div>
        </div>
    )
}

export default EventsCalendar;
