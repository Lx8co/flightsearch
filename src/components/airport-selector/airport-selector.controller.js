export default function AirportSelectorController($scope, AirportsService) {
  'ngInject';

  this.airports = [];

  this.getAirports = () => AirportsService.find().then((airports) => {
    this.airports = airports;
    return airports;
  });
}
