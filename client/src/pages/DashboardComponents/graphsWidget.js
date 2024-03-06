import React from 'react';
import widgetTitle from './widgetTitle';

function graphsWidget() {
    return (
      <div>
        <widgetTitle>@graphData.style</widgetTitle>
        <p>List differnt options, learning time, </p>
        <button id="title" name="title" value={graphData.style} onChange={handleChange}>Learning Time</button>
        <button id="description" name="description" value={graphData.style} onChange={handleChange}>Resources Covered</button>
        <p>Get list of next 5 calender events</p>
        <br/>
        <p>Make each in a button so can be clicked</p>
        <br/>
        <p>If list has nothing in it, show no upcoming events</p>
      </div>
    );
};

export default graphsWidget;