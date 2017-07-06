import moment from 'moment';

export default function ListController($stateParams, CheapFlightService) {
  'ngInject';

  this.flights = [];
  this.noResults = false;

  const searchCriteria = {
    origin: $stateParams.origin,
    destination: $stateParams.destination,
    start: $stateParams.start,
    end: $stateParams.end
  };

  this.$onInit = () => {
    CheapFlightService.find(searchCriteria).then((flights) => {
        if (flights.length === 0) {
          this.noResults = true;
          return;
        }

      this.flights = flights.map(flight => ({
        origin: searchCriteria.origin,
        destination: searchCriteria.destination,
        start: moment(flight.dateFrom).format('MM/DD/YYYY HH:MM'),
        end: moment(flight.dateTo).format('MM/DD/YYYY HH:MM'),
        price: flight.price.toFixed(2) + flight.currency
      }));
    });
  };
}
