import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Orederservice } from '../../service/orederservice';
import { Validation } from "../../../../core/auth/component/validation/validation";

@Component({
  selector: 'app-checkout-session',
  imports: [ReactiveFormsModule, Validation],
  templateUrl: './checkout-session.html',
  styleUrl: './checkout-session.css',
})
export class CheckoutSession {

    checkoutform!:FormGroup
    cartId!:string



private fb = inject(FormBuilder)
  private activatedRoute = inject(ActivatedRoute)
  private orderservice = inject(Orederservice)


formInit(){
  this.checkoutform=this.fb.group({
     details:['',[Validators.required]],
      phone:['',[Validators.required]],
      city:['',[Validators.required]]
  })
}

ngOnInit():void{
  this.getcartId()
  this.formInit() 
}

getcartId(){
  this.activatedRoute.paramMap.subscribe({
    next:(res)=>{
      console.log('route id:', res.get('id'));
      this.cartId=res.get('id')!
    }
  })
}


sumbite(){
this.orderservice.checkout(this.cartId,this.checkoutform.value).subscribe({
  next:(res)=>{
    console.log(res);
    open(res.session.url,'_self')

  }
})
}
}
