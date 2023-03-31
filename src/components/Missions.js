import React, { Component } from 'react';
import Title from './Title';
import MissionsInfo from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {MissionsInfo.map((element, index) => (
          <MissionCard
            key={ index }
            name={ element.name }
            year={ element.year }
            country={ element.country }
            destination={ element.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
