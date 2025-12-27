import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../products/models/productinterface';
import { Productservice } from '../../services/productservice';



@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

productlist:any=[]
@Input() product!:Product
private productservice = inject(Productservice)



}
