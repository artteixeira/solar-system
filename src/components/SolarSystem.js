import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        {Planets.map((element, index) => (
          <PlanetCard
            key={ index }
            planetName={ element.name }
            planetImage={ element.image }
          />
        ))}
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
