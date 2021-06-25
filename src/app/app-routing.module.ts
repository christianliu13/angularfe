import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'form' , component: FormComponent, canActivate: [AuthGuard]},
  { path: 'analytics' , component: AnalyticsComponent, canActivate: [AuthGuard]},
  { path: 'login' , component: LoginComponent},
  { path: '404' , component: NotfoundComponent},
  { path: '**' , redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
