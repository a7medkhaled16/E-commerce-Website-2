import { Component, Input ,AfterViewInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Auth } from '../../core/auth/services/auth';
import { Cartservice } from '../../feature/cart/service/cartservice';
import { WishListService } from '../../feature/wislist/service/wish-list-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  name:string | null =''
  navCounter : number = 0
private authservice = inject(Auth)
private cartservice = inject(Cartservice)
// private wishlistservice = inject(WishListService)


@Input() layout!:string

logout(){
  this.authservice.logout()
}

ngAfterViewInit(): void {
    initFlowbite();
  }

  ngOnInit(){
    if (localStorage.getItem('savetoken')){
    this.cartservice.getLoggedcart().subscribe({
      next:(res)=>{
        this.navCounter=res.numOfCartItems
      }
    })}



this.name = localStorage.getItem('name')
this.cartservice.cartCounter.subscribe({
  next:(value)=>{
    this.navCounter=value
  }
})
  }
}
