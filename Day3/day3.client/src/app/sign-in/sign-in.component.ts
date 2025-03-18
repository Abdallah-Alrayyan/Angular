import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter } from 'rxjs';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private _url: HttpClient) { }

  userlog: any

  users : any

  USER(data: any) {

    this.userlog = this._url.get(data);

    this.users = this._url.get('https://67d6b64c286fdac89bc2c055.mockapi.io/user').subscribe((data) => {

      filter((data) => this.users == this.userlog)
  
    }

    )
   
    alert("user login")

    
  }

}
