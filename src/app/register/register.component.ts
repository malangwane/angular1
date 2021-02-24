import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validator, Validators, AbstractControl} from '@angular/forms';
import { User } from './User';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailMessage: string;
  firstNameMessage: string;
  userForm: FormGroup;
 // User = new User();

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.',
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email:['',[Validators.required, Validators.email]],
        confirmEmail:['',[Validators.required, Validators.email]]
      }, {validator:emailMatcher}),
    })

    const emailControl = this.userForm.get('emailGroup.email');
    emailControl.valueChanges.subscribe(
      value => this.setMessage(emailControl)
    );

  }

  setMessage(c:  AbstractControl): void{
    this.emailMessage = '';
    if((c.touched || c.dirty) && c.errors){
      this.emailMessage = Object.keys(c.errors).map(
      key => this.validationMessages[key]).join(' ');
    }
  }

  save() {
    console.log(this.userForm);
    console.log('Saved: ' + JSON.stringify(this.userForm.value));
  }
}
