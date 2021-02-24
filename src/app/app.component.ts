import { Component } from '@angular/core';

@Component({
  selector: 'am-root',

  template: `<nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{title}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/Home']">Home</a></li>
      <li><a class='nav-link' [routerLink]="['/Advert']">Advert list</a></li>
      <li><a class='nav-link' [routerLink]="['/Register']">Register</a></li>
      <li><a class='nav-link' [routerLink]="['/Log-in']">LogIn</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
    
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string  = 'AD Store';
}
