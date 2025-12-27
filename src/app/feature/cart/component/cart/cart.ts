import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Cartitem } from "../cartitem/cartitem";
import { Cartservice } from '../../service/cartservice';
import { Cart } from '../../models/cart.interface';
// import { count } from 'rxjs';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-cart',
  imports: [CommonModule, Cartitem,RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartList {

  loading:boolean=true
  cartdetails :Cart ={} as Cart
  cartitem:any=[]
  private cartservice = inject(Cartservice)


  getall(){
    this.cartservice.getLoggedcart().subscribe({
      next:(res)=>{
        this.loading=false
        console.log(res);
        this.cartdetails=res
        this.cartitem=res.data.products
      }
    })
  }

  removeitem(id:string){
    this.cartservice.removeitem(id).subscribe({
      next:(res)=>{
        this.getall()
        console.log(res);
        this.cartservice.cartCounter.next(res.numOfCartItems)
        
        
      }
    })
  }

  updateCount(id:string , count:number){
      this.cartservice.UpdateitemQun(id , count).subscribe({
        next:(res)=>{
          this.getall()
          console.log(res);  
        }
      })
    }

    clearCart(){
      this.cartservice.clearcart().subscribe({
        next:(res)=>{
          this.getall()
        }
      })
    }

  ngOnInit():void{
    this.getall()
  }
}
