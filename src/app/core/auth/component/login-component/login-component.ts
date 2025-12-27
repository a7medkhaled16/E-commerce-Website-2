import { Component, inject } from '@angular/core';
import { Validation } from "../validation/validation";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [Validation,ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {

private fb = inject(FormBuilder)
private router = inject(Router)
private readonly auth = inject(Auth)

isloading=true
authForm!:FormGroup


formInit(){
this.authForm=this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]]
})
}


  
submiteform(){
  
  this.isloading=false
  console.log(this.authForm)
  this.auth.login(this.authForm.value).subscribe({
    next:(res)=>{
      console.log('response : ' , res)
  this.isloading=true
   if(res.message=='success'){
          // this.authservice.savetoken(res.token)
          this.auth.saveToken(res.token)
          this.auth.savename(res.user.name)
          this.router.navigate(['/home'])
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
