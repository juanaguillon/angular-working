import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginParams:any = {}

  constructor(private AuthService:AuthService) {}

  login( ){
    this.AuthService.loginUser( this.loginParams.email, this.loginParams.password );
  }
  
  ngOnInit() {
  }

}
