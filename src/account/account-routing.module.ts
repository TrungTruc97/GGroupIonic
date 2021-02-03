import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';
import { LogoutPage } from './logout/logout.page';
import { AppRouteGuard } from '../shared/auth/auth-route-guard';


const routes: Routes = [ 
  { path: 'login', component: LoginPage, },
  { path: 'logout', component: LogoutPage, canActivate: [AppRouteGuard] }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
