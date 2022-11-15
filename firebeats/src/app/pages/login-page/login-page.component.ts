import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})

export class LoginPageComponent implements OnInit {
  form : FormGroup;
  loading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private fb:FormBuilder ,private _snackBar: MatSnackBar, private router: Router) {
      this.form = this.fb.group({
      user:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
  
    const user= this.form.value.user;
    const password= this.form.value.password;
    if (user== "admin" && password==123 ){
 this.fakeloading();
 
    }else{
     this.error();
     this.form.reset();
    }
  }
  error(){
    this._snackBar.open('Usuario o contraseña ingresados son incorrectos','',{
    duration: 5000,
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    })
  }
  fakeloading(){
    this.loading=true;
    setTimeout(()=>{
      //redireccion
    this.router.navigate(['dashboard']);
    },1500);
    
    }
}
