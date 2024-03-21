import React from 'react';
import styles from './shared/styles';
import userWidget from './DashboardComponents/userWidget';
import healthWidget from './DashboardComponents/healthWidget';
import messagesWidget from './DashboardComponents/messagesWidget';

function UserDashboard() {
    return (
      <div class="Container">
        <userWidget class="dash9" />
        <healthWidget class="dash10" />
        <messagesWidget class="dash11"/>
      </div>
    );
};


export default UserDashboard;