import { Component, OnInit } from '@angular/core';
import { IAdvert } from './Product';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})
export class AdvertDetailsComponent implements OnInit {

  title: string = 'Advert Details';
  product: IAdvert;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id  = +this.route.snapshot.paramMap.get('id');
    this.product ={
      "productId": 2,
      "productName": "Hair Clipper",
      "description":"stylish hair clipper for babers",
      "price" : 199.99,
      "dateCreated": "23-07-2021"
    }
  }

  onBack(): void{
    this.router.navigate(['/Advert']);
  }
}
