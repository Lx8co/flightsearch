import template from './flight-list.component.html';
import './flight-list.component.scss';

export const FlightListComponent = {
  bindings: {
    flights: '<'
  },
  template
};

export default FlightListComponent;
