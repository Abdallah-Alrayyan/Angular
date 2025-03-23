import { Component } from '@angular/core';
import { AbdService } from '../abd.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private _myser: AbdService) { }

  ngOnIni() {

  }

  postDataUser(data: any) {
    this._myser.postRegistrationUser(data).subscribe(() => {

    })
  }

}
