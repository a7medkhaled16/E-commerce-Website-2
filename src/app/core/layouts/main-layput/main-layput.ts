import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Navbar } from "../../../shared/navbar/navbar";

@Component({
  selector: 'app-main-layput',
  imports: [RouterOutlet, Navbar],
  templateUrl: './main-layput.html',
  styleUrl: './main-layput.css',
})
export class MainLayput {
toTop(){
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
showbtn:boolean=false
@HostListener('window:scroll') scrollTop(){
  let scrolltop = document.documentElement.scrollTop
  if(scrolltop > 300){
    this.showbtn=true
  }else{
    this.showbtn=false
  }
}
}
