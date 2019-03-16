import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor ( private auth:AngularFireAuth ){
  }
  registerUser ( email:string, password:string ){

    this.auth.auth.createUserWithEmailAndPassword( email, password )
      .then( resp => {
        alert('Usuario registrado correctamente');
      })
      .catch( err => {
        alert('Error inesperado')
      });
      
    
  }
  loginUser ( email:string, password:string ){

    this.auth.auth.signInWithEmailAndPassword( email, password )
      .then( resp => {
        alert('Usuario logeado correctamente');
      })
      .catch( err => {
        alert('Error inesperado')
      });
      
    
  }

  logoutUser ( ){
    this.auth.auth.signOut();
  }


  public isLogged( ){
    return this.auth.authState;
  }

  public getCurrentUser( ){
    return this.auth.auth;
  }


  
}

