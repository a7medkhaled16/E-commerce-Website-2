import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Navbar } from "../../../shared/navbar/navbar";
// import { Navbar } from "../../../shared/component/navbar/navbar";

@Component({
  selector: 'app-auth-layput',
  imports: [RouterOutlet, Navbar],
  templateUrl: './auth-layput.html',
  styleUrl: './auth-layput.css',
})
export class AuthLayput {

}
