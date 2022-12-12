import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  form : FormGroup;
  constructor(private fb:FormBuilder, ) {
    this.form = this.fb.group({
      UserName:[''],
      UserPassword:['']
    })
  }

  ngOnInit(): void {
  }

  registrar(){

  }

}
