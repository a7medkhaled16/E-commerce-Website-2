import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productservice } from '../../services/productservice';
import { Product, Product2 } from '../../models/productinterface';
import { Cartservice } from '../../../cart/service/cartservice';
import { WishListService } from '../../../wislist/service/wish-list-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
productId !: string | null
productdetails : Product2 ={} as Product2


private activatedroute= inject(ActivatedRoute)
private productservise= inject(Productservice)
private cartservice = inject(Cartservice)
private wishlistservice = inject(WishListService)
private toaster = inject(ToastrService)


showtoastr(msg:string) {
    this.toaster.warning(msg, '',{
      timeOut:1000 ,
    progressBar:true
    }); 
  }


getproductid(){
  this.activatedroute.paramMap.subscribe({
    next:(urldata)=>{
      this.productId=urldata.get('id')
    }
  })
}
getproductdetails(id:string | null){
  this.productservise.getproductdetails(id).subscribe({
    next:({data})=>{
      this.productdetails=data
    }
  })
}


addtocart(id:string){
this.cartservice.Addtocart(id).subscribe({
  next:(res)=>{
    console.log('cart response',res);
  }
})
}


addwishlist(id:string){
this.wishlistservice.addtowishlist(id).subscribe({
  next:(res)=>{
    console.log('wish response',res)
    this.showtoastr('Added To Wishlist successfully')

  }
})
}

 ngOnInit(): void{
    this.getproductid()
    this.getproductdetails(this.productId)
  }


}
