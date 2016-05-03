import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {AppComponent} from './app.component';
import 'rxjs/Rx';
import {ROUTER_PROVIDERS} from 'angular2/router';

enableProdMode();
bootstrap(AppComponent, [ROUTER_PROVIDERS]); // launches our app
