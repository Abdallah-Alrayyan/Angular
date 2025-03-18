import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {



  isVisible = false;

  items = ['Apple', 'Banana', 'Cherry'];

  value = 'B';

  //--------------------------------------



  users = [
    { name: 'Alice', age: 25, role: 'Admin' },
    { name: 'Bob', age: 30, role: 'User' },
    { name: 'Charlie', age: 22, role: 'Guest' },
    { name: 'Diana', age: 28, role: 'Admin' }
  ];

}
