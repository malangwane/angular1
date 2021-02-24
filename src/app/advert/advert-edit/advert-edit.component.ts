import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Advert } from './Advert';
import { AdvertService } from '../Advert.service';


@Component({
  selector: 'app-advert-edit',
  templateUrl: './advert-edit.component.html',
  styleUrls: ['./advert-edit.component.css']
})
export class AdvertEditComponent implements OnInit {

  advertForm: FormGroup;
 Advert: Advert;

  title:string = "Edit";
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.advertForm = this.fb.group({
      productName: ['',[Validators.required,Validators.maxLength(50),Validators.minLength(3)]],
      description:['',Validators.required, Validators.maxLength(100)],
      dateCreated: '',
    })
  }

 

}
