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
        console.log( resp );
      })
      .catch( err => {
        alert('Error inesperado')
        console.log( err );
      });
      
    
  }
  loginUser ( email:string, password:string ){

    this.auth.auth.signInWithEmailAndPassword( email, password )
      .then( resp => {
        alert('Usuario logeado correctamente');
        console.log( resp );
      })
      .catch( err => {
        alert('Error inesperado')
        console.log( err );
      });
      
    
  }

  logoutUser ( ){
    this.auth.auth.signOut();
  }


  public isLogged( ){
    return this.auth.authState;
  }


  
}

