import { Component, inject, Input } from '@angular/core';

import { Homeservice } from '../../services/homeservice';
import { Slider } from "../slider/slider";
import { Product } from '../../../products/models/productinterface';
import { ProductList } from "../../../products/component/product-list/product-list";
import { ProductSlider } from "../product-slider/product-slider";

@Component({
  selector: 'app-home',
  imports: [Slider, ProductList, ProductSlider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
productlist:any=[]
@Input() product!:Product
private homeservice = inject(Homeservice)

getallpro(){
  this.homeservice.getall().subscribe({
    next:(res)=>{
      console.log(res.products)
      this.productlist=res.products

    }
  })
}

ngOnInit():void{
this.getallpro()
}

}
