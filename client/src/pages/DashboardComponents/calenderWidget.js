import React from 'react';
import widgetTitle from './widgetTitle';

function calenderWidget() {
    return (
      <div>
        <widgetTitle>Upcoming Events</widgetTitle>
        <p>Get list of next 5 calender events</p>
        <br/>
        <p>Make each in a button so can be clicked</p>
        <br/>
        <p>If list has nothing in it, show no upcoming events</p>
      </div>
    );
};

export default calenderWidget;