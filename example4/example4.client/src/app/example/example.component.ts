import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {


  //String
  message = 'Hello World';




  //Number
  pi = 3.14159;

  price = 100;

  Percent = 0.75;




  //Date
  today = new Date();




  //Array
  fruits = ['Apple', 'Banana', 'Cherry', 'Date'];




  //Object
  user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  };









}
