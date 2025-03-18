import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUPComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [

  { path: "signup", component: SignUPComponent },
  { path: "login", component: SignInComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
