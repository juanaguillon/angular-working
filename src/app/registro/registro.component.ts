import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro: any = {}

  constructor(private AuthService: AuthService) { }

  register() {
    this.AuthService.registerUser(this.registro.email, this.registro.password)
  }
  
  ngOnInit() {
  }

}
