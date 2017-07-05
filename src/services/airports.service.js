export const AirportsService = ['$http', $http => ({
  find: () => $http.get(
      'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/',
      {}
    )
    .then(response => response.data.airports)
    .catch(() => [])
})];

export default AirportsService;
