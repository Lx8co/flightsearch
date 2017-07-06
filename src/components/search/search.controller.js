import moment from 'moment';

export default function SearchController($scope, $state) {
  'ngInject';

  this.find = () => {
    $scope.error = false;

    if (typeof $scope.origin === 'undefined' || typeof $scope.destination === 'undefined'
      || typeof $scope.startDate === 'undefined' || typeof $scope.endDate === 'undefined') {
      $scope.error = true;
      return;
    }

    const origin = $scope.origin.selected.iataCode;
    const destination = $scope.destination.selected.iataCode;
    const start = moment($scope.startDate).format('YYYY-MM-DD');
    const end = moment($scope.endDate).format('YYYY-MM-DD');

    $state.go('list', { origin, destination, start, end });
  };
}
