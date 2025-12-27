import { Component, inject } from '@angular/core';
import { Wishitem } from "../wishitem/wishitem";
import { CommonModule } from '@angular/common';
import { WishListService } from '../../service/wish-list-service';
import { Wishlistt } from '../../models/wishlist.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule , Wishitem],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  wishlistdetails : Wishlistt ={} as Wishlistt
  wishlistarr:any=[]
private wishlistservice = inject(WishListService)
private toaster = inject(ToastrService)


showtoastr(msg:string) {
    this.toaster.warning(msg, '',{
      timeOut:1000 ,
    progressBar:true
    }); 
  }


getallWishlist(){
  this.wishlistservice.getwishlist().subscribe({
    next:(res)=>{
      console.log(res);
      this.wishlistdetails=res
      this.wishlistarr=res.data

    }
  })
}

removewish(id:string){
  this.wishlistservice.removefromwishlist(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.showtoastr('Removed from WishList')
      this.getallWishlist()
      
    }
  })
}
// addtowishlist(id:string){
//   this.wishlistservice.addtowishlist(id).subscribe({
//     next:(res)=>{
//       console.log(res);
      
//     }
//   })
// }

ngOnInit():void{
this.getallWishlist()
}
}
