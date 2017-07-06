import moment from 'moment';

export default function SearchController($scope, $state) {
  'ngInject';

  this.find = () => {
    $scope.error = false;

    
    if ( !($scope.origin  ||  $scope.destination 
      || $scope.startDate  || $scope.endDate) ) {
      $scope.error = true;
      return;
    }

    const origin = $scope.origin.selected.iataCode;
    const destination = $scope.destination.selected.iataCode;
    const start = moment($scope.startDate).format('YYYY-MM-DD');
    // console.log(start);
    const end = moment($scope.endDate).format('YYYY-MM-DD');

    $state.go('list', { origin, destination, start, end });
  };
}
