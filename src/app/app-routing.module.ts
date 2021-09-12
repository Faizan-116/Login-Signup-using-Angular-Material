import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { ForgetComponent } from './forget/forget.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Sign-Up', component: SignUPComponent },
  { path: 'forget-password', component: ForgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
