import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((element, index) => (
          <PlanetCard
            key={ index }
            planetName={ element.name }
            planetImage={ element.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
