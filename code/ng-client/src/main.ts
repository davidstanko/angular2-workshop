import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import {ComponentRef} from '@angular/core';

import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import {LocalStorage} from './app/auth';

import {APP_AUTH_PROVIDERS} from './app/auth';
import {APP_PROVIDERS} from './app/shared';

import {AUTH_PROVIDERS} from 'angular2-jwt';
import {LoginService} from './app/shared';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  AUTH_PROVIDERS,
  APP_PROVIDERS,
  APP_AUTH_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]).then(
  (appRef: ComponentRef<any>) => {
    // Look for the user:
    let storage: LocalStorage = appRef.injector.get(LocalStorage);
    let loginService: LoginService = appRef.injector.get(LoginService);
    storage.initStorage(window.localStorage);

    loginService.loadUser('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI3U3JQN1BDckg2YzlReXdhIiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbWl4dGFwZS5jb20iLCJhZG1pbiI6dHJ1ZSwiZmlyc3ROYW1lIjoiQWRtaW4iLCJsYXN0TmFtZSI6IlVzZXIifQ.90H4DwRUoTcY6N8Xfe6FmN2sGnTpTrgJn3zPgfa7Rso');
  },
  error => console.log(error)
);
