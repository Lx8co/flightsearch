import template from './airport-selector.component.html';
import controller from './airport-selector.controller';
import './airport.selector.scss';


export const AirportSelectorComponent = {
  bindings: {
    airport: '='
  },
  template,
  controller
};

export default AirportSelectorComponent;
