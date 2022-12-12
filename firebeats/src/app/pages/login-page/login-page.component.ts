import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

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

  constructor(private fb:FormBuilder ,private _snackBar: MatSnackBar, private router: Router, private auth:AuthServiceService) {
      this.form = this.fb.group({
        UserName:['',Validators.required],
        UserPassword:['',Validators.required]
      })
   }

  ngOnInit(): void {
  }

  ingresar(){ 

    const formData = new FormData();
    this.auth.login(this.form.value).add(this.afterLogin());    
    
  }

  afterLogin(){

    if (this.auth.isLoggedIn()){

      this.fakeloading();
 
    } else {

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
    setTimeout(()=>{ this.router.navigate(['homepage']); },1500);       
    
  }
}
