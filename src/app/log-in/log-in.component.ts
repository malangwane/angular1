import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Log } from './LogIn';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  advertForm: FormGroup;
 log: Log;

  title: string = 'Log in';
  constructor() { }

  ngOnInit(): void {
  }
  

}
