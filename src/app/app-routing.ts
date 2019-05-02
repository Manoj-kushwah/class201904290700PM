import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path : 'login', loadChildren: './login/login.module#LoginModule'},
  { path : '', loadChildren: './home/home.module#HomeModule'},
  { path : 'home', redirectTo: ''}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
