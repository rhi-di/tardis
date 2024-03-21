import React from 'react';
import styles from './shared/styles';
import courseWidget from './DashboardComponents/courseWidget';
import resourceWidget from './DashboardComponents/resourceWidget';
import calenderWidget from './DashboardComponents/calenderWidget';
import graphsWidget from './DashboardComponents/graphsWidget';

function Home() {
    return (
      <div class="Container">
        <courseWidget class="dash1" />
        <resourceWidget class="dash2" />
        <calenderWidget class="dash3"/>
        <graphsWidget class="dash4"/>
      </div>
    );
};

export default Home;
