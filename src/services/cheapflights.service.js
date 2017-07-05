export const CheapFlightService = ['$http', ($http) => {
  const url = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights';

  return {
    find: (criteria) => {
      if (typeof criteria.start === 'undefined' || typeof criteria.end === 'undefined'
        || typeof criteria.origin === 'undefined' || typeof criteria.destination === 'undefined') {
        return Promise.resolve([]);
      }

      return $http.get(
            `${url}/from/${criteria.origin}/to/${criteria.destination}/${criteria.start}/${criteria.end}
            /250/unique/?limit=15&offset-0`,
            {}
          )
          .then(response => response.data.flights)
          .catch( (reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
        });
    }
  };
}];

export default CheapFlightService;
