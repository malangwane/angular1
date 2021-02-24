import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AdvertService } from './Advert.service';
import { IAdvert } from './Product';

@Component({
  selector: 'am-advert',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  Tittle: string = "Product List";

  _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
  }

  filteredProducts: IAdvert[];

  products: IAdvert[] = [];
  
  private _advertService;
  constructor(advertService:AdvertService) { 
    this._advertService = advertService;    
  }

  performFilter(filterby: string): IAdvert[]{
      filterby = filterby.toLocaleLowerCase();
      return this.products.filter((product: IAdvert) => 
      product.productName.toLocaleLowerCase().indexOf(filterby) !== -1)
  }
  ngOnInit(): void {
    this.products = this._advertService.getAdverts();
    this.filteredProducts = this.products;
  }

}
