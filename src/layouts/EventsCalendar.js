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
            <link href='fullcalendar/core/main.css' rel='stylesheet' />
            <link href='fullcalendar/daygrid/main.css' rel='stylesheet' />

            <div id="calendar">
                Calendar!
                <FullCalendar   defaultView = "dayGridMonth" 
                                plugins = { [googleCalendarPlugin, dayGridPlugin] } 
                                googleCalendarApiKey = 'b442373c68dbd163643e964efc1e98ba331790cd'
                                // events = { googleCalendarId = 'l8kg3r6d4ar7cff11jqqhkqahk@group.calendar.google.com'} 
                                />
            </div>
        </div>
    )
}

export default EventsCalendar;
