import { Injectable } from '@angular/core';
import { PermissionCheckerService } from 'abp-ng2-module/dist/src/auth/permission-checker.service';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { UtilService } from '../../service/util.service';
import { AppConsts } from '../AppConsts';


@Injectable({
    providedIn: 'root'
  })
export class AppRouteGuard implements CanActivate, CanActivateChild {

    constructor(
        private _permissionChecker: PermissionCheckerService,
        private _router: Router,
        private _utilService: UtilService,
        private _authService: AuthService,

    ) {
      
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this._authService.getToken()) {
            this._router.navigateByUrl('/account/login');
          }
          return this._authService.getToken();
       
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}