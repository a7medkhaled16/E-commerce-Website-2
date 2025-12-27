import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../../models/cart.interface';
import { Cartservice } from '../../service/cartservice';


@Component({
  selector: 'app-cartitem',
  imports: [],
  templateUrl: './cartitem.html',
  styleUrl: './cartitem.css',
})
export class Cartitem {
@Input() product!:Product
@Output() deletecart=new EventEmitter<any>()
@Output() updateQnt=new EventEmitter<{id:string,count:number}>()
private readonly cartservice =inject(Cartservice)
removeitem(){
  this.deletecart.emit(this.product.product._id)
    // this.cartservice.cartCounter.next(res.numOfCartItems)

}

update(countnum:number){
  this.updateQnt.emit({
    id:this.product.product._id ,
    count:countnum
  })
}
}
