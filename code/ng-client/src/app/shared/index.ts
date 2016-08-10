export * from './extHttp.service';
export * from './project.service';
export * from './Project';
export * from './login.service'
export * from './employee.service'
export * from './Employee'

import {ExtHttp} from './extHttp.service';
import {LoginService} from './login.service'

export const APP_PROVIDERS = [
  ExtHttp, LoginService
];
