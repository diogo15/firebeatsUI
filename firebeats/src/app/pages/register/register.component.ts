import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConsumerService } from 'src/app/services/api-routes/consumer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  form : FormGroup;
  constructor(private fb:FormBuilder, private consumer:ConsumerService,private router: Router ) {
    this.form = this.fb.group({
      userName:[''],
      userPassword:[''],
      userEmail:[''],
      isArtist:[''],
      cityId:['8f8ef7c2-0ec6-47b5-abfc-0b41e4443ee3'],
    })
  }

  ngOnInit(): void {
  }

  registrar(){

    this.consumer.postUser(this.form.value).subscribe({
      next: (v) => this.router.navigate(['/login']),
      error: (e) => alert("error")
    });

  }

}
