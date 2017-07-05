import moment from 'moment';

export default function ListController($stateParams, CheapFlightService) {
  'ngInject';

  this.flights = [];
  this.noResults = false;

  const searchCriteria = {
    start: $stateParams.start,
    end: $stateParams.end,
    origin: $stateParams.origin,
    destination: $stateParams.destination
  };

  this.$onInit = () => {
    CheapFlightService.find(searchCriteria).then((flights) => {
      if (flights.length === 0) {
        this.noResults = true;
        return;
      }

      this.flights = flights.map(flight => ({
        origin: moment(flight.dateFrom).format('MM/DD/YYYY HH:MM'),
        destination: moment(flight.dateTo).format('MM/DD/YYYY HH:MM'),
        price: flight.price.toFixed(2) + flight.currency
      }));
    });
  };
}
