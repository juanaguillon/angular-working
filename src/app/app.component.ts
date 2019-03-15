import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("contenedor", [
      state("inicial", style({
        opacity: 0,
        background: "green"
      })),
      state("final", style({
        opacity: 1,
        background: "yellow"
      })),
      transition("inicial => final", animate(1000) ),
      transition("final => inicial", animate(500) )
    ])
  ]
})
export class AppComponent {
  title = 'Angular Working';
  state =  "final" 
  authLogged:boolean = false;

  constructor( private AuthService:AuthService, private router:Router ){

    // this.authLogged = AuthService.isLoggin( );
    // console.log( this.AuthService.isLogged() );
    this.AuthService.isLogged().subscribe( r => {
      if ( r && r.uid ){
        this.authLogged = true;
      }else{
        this.authLogged = false;
      }
    }, error => {
      this.authLogged = false
    } )

  }

  logoutUser( ){
    this.AuthService.logoutUser();
    this.router.navigate(["/ingresar"]);
  }




  
}
