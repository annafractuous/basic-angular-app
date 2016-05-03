import {Component} from 'angular2/core';
import {TubeComponent} from './tube.component';
import {HomeComponent} from './home.component';
import {LoginComponent} from './login.component';
import {StudentCenterComponent} from './student-center/student.component';
import {StyleDirective} from './style.directive';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-app',
  templateUrl: '../templates/main.html',
  directives: [TubeComponent, StyleDirective, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/login', name: 'Login', component: LoginComponent},
    {path: '/student-center/...', name: 'StudentCenter', component: StudentCenterComponent}
])
export class AppComponent { }
