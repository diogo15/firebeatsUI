import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input('logged') logged : boolean = false
    
  constructor(private router: Router, private auth : AuthServiceService) { }

  ngOnInit(): void {
  }

  ingresar() {
    this.router.navigate(['login']);
  }

  logout() {
    if (this.auth.isLoggedIn()) {
      this.auth.logout()
      this.router.navigate(['homepage'])
    }
  }
}
