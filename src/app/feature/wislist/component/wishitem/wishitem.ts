import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { WishListService } from '../../service/wish-list-service';
import { Data } from '../../models/wishlist.interface';
import { Cartservice } from '../../../cart/service/cartservice';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishitem',
  imports: [CommonModule,RouterLink],
  templateUrl: './wishitem.html',
  styleUrl: './wishitem.css',
})
export class Wishitem {
private wishlistservice = inject(WishListService)
private cartservice = inject(Cartservice)
@Input() wishlist!:Data
@Output() remove = new EventEmitter<any>()
private toaster = inject(ToastrService)


showtoastr(msg:string) {
    this.toaster.success(msg, '',{
      timeOut:1000 ,
    progressBar:true
    }); 
  }

getallWishlist(){
  this.wishlistservice.getwishlist().subscribe({
    next:(res)=>{
      console.log(res);  
    }
  })
}


addtocart(){
  this.cartservice.Addtocart(this.wishlist._id).subscribe({
  next:(res)=>{
  console.log(res);
      this.showtoastr('Added To Cart successfully')
  }
  })
}

removefromwishList(){
  
  this.remove.emit(this.wishlist._id)
}

}
