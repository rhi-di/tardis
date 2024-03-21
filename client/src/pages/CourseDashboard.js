import React from 'react';
import styles from './shared/styles';
import descriptionWidget from './DashboardComponents/descriptionWidget';
import resourceWidget from './DashboardComponents/resourceWidget';
import calenderWidget from './DashboardComponents/calenderWidget';
import graphsWidget from './DashboardComponents/graphsWidget';

function DashboardLayout() {
    return(
        <body class="Container">
            <descriptionWidget class="dash5"/>
            <resourceWidget class="dash6"/>
            <calenderWidget class="dash7"/>
            <graphsWidget class="dash8"/>
        </body>
    )
}



export default CourseDashboard;