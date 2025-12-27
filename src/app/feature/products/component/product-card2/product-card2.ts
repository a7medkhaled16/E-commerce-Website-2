import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Productservice } from '../../services/productservice';
import { Product2 } from '../../models/productinterface';
import { RouterLink } from '@angular/router';
import { Cartservice } from '../../../cart/service/cartservice';
import { WishListService } from '../../../wislist/service/wish-list-service';
import { ToastrService } from 'ngx-toastr';
import { StockStatusPipe } from '../../../../shared/pipes/stock-status-pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-card2',
  imports: [RouterLink,StockStatusPipe,DatePipe],
  templateUrl: './product-card2.html',
  styleUrl: './product-card2.css',
})
export class ProductCard2 {
@Input() product2!:Product2

@Output() addtocart = new EventEmitter<string>()

private wishlistservice = inject(WishListService)
private toaster = inject(ToastrService)


showtoastr(msg:string) {
    this.toaster.warning(msg, '',{
      timeOut:1000 ,
    progressBar:true
    }); 
  }

addprotocart(){
this.addtocart.emit(this.product2._id)
}

addtowishlist(id:string){
this.wishlistservice.addtowishlist(id).subscribe({
  next:(res)=>{
    console.log(res)
    this.showtoastr('Added To Wishlist successfully')

  }
})
}

}
