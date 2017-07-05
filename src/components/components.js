import angular from 'angular';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { AirportSelectorComponent } from './airport-selector/airport-selector.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';

export default angular.module('app.components', [])
.component('dateWrapper', DateWrapperComponent)
.component('dateSelector', DateSelectorComponent)
.component('airportSelector', AirportSelectorComponent)
.component('flightList', FlightListComponent)
.component('searchBar', SearchComponent)
.component('navbar', NavbarComponent)
.name;
