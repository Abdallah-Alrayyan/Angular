import { Component } from '@angular/core';
import { AbdService } from '../abd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {


  constructor(private _myser: AbdService, private _route: Router) { }

  userData: any
  getDataUser(logedUser: any) {
    this._myser.getUserLogin().subscribe((data: any) => {
      let userData = data.find((x: any) => x.Email == logedUser.Email && x.password == logedUser.password);

      if (userData) {
        sessionStorage.setItem('loggeduser', JSON.stringify(userData));
        alert("Login Successfully");
        this._route.navigate(["/profile"]);
      } else {
        alert("Invalid email or password");
      }
    })
  }



}
