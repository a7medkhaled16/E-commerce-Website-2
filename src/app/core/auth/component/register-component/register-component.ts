import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Validation } from "../validation/validation";
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  imports: [ReactiveFormsModule, Validation],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {

private fb = inject(FormBuilder)
private readonly auth = inject(Auth)
private readonly router = inject(Router)

isloading=true
authForm!:FormGroup


formInit(){
this.authForm=this.fb.group({
    name: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    rePassword: ['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
},{validators:[this.repasswordmatch]})
}


  repasswordmatch(control:AbstractControl){
   return control.get('password')?.value === control.get('rePassword')?.value?null:{mismatch:true}
  }
submiteform(){
  this.isloading=false
  console.log(this.authForm)
  this.auth.signup(this.authForm.value).subscribe({
    next:(res)=>{
      console.log('sendddd' , res)
      this.isloading=true
      if(res.message=='success'){
        this.router.navigate(['/login'])
      }
    },
    error: (err) => {
    console.log("Error:", err.error);  // VERY IMPORTANT
  }
  })
}
ngOnInit():void{
  this.formInit()
}
}

