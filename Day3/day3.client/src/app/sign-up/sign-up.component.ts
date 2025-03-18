import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUPComponent {

  constructor(private _url: HttpClient) { }

  SingUp(data: any) {



    this._url.post('https://67d6b64c286fdac89bc2c055.mockapi.io/user', data).subscribe((data) => {

      alert("User added")
    })


  }

}

`` 
