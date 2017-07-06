// for debuging proporse
// import enableProdMode from '@angular/core';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiSelect from 'ui-select';
import ngSanitize from 'angular-sanitize';

import Components from './components/components';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import {
  CheapFlightService,
  AirportsService
} from './services';

angular.module('myApp', [
  uiRouter,
  uiSelect,
  ngSanitize,
  Components
])
.component('homePage', HomeComponent)
.component('flightsPage', ListComponent)
.service('AirportsService', AirportsService)
.service('CheapFlightService', CheapFlightService)
.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '',
      template: '<home-page></home-page>'
    })
    .state('list', {
      url: '/list?origin&destination&start&end',
      template: '<flights-page></flights-page>'
    });
});
