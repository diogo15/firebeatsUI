import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { path: '',redirectTo: 'index',pathMatch:'full'},
  { path: 'homepage', component: HomePageComponent },
  { path:'login', component: LoginPageComponent},
  { path:'register', component: RegisterComponent},
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
