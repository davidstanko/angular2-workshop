export * from './extHttp.service';
export * from './project.service';
export * from './Project';
export * from './login.service'

import {ExtHttp} from './extHttp.service';
import {LoginService} from './login.service'

export const APP_PROVIDERS = [
  ExtHttp, LoginService
];
