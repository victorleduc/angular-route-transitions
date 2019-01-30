import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'splash',
  },
  {
    path: 'splash',
    component: SplashComponent,
    data: { animation: 'Splash' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'Login' }
  },
  {
    path: 'home',
    component: LoginComponent,
    data: { animation: 'Home' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
