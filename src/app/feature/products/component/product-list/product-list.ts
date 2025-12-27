
import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../products/models/productinterface';
import { Productservice } from '../../services/productservice';
import { ProductCard } from "../product-card/product-card";
import { ProductCard2 } from "../product-card2/product-card2";
import { Cartservice } from '../../../cart/service/cartservice';
import { ToastrService } from 'ngx-toastr';
import { SearchPipePipe } from '../../../../shared/pipes/search-pipe-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, ProductCard2,SearchPipePipe ,FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  productlist:any=[]
  productlist2:any=[]
  searchterm:string=''

private productservice = inject(Productservice)
private cartservice = inject(Cartservice)
private toastr = inject(ToastrService)

showtoastr(msg:string) {
    this.toastr.success(msg, '',{
      timeOut:1000 ,
    progressBar:true
    }); 
  }
getallpro(){
  this.productservice.getall().subscribe({
    next:(res)=>{
      // console.log(res.products)
      this.productlist=res.products

    }
  })
}

getallproduct(){
  this.productservice.getallpros().subscribe({
    next:(res)=>{
      // console.log(res.data)
      this.productlist2=res.data

    }
  })
}

addtocart(id:string){
this.cartservice.Addtocart(id).subscribe({
  next:(res)=>{
    console.log(res);
    this.showtoastr('Product added successfully')
    this.cartservice.cartCounter.next(res.numOfCartItems)
  }
})
}

ngOnInit():void{
this.getallpro()
this.getallproduct()
}

}
