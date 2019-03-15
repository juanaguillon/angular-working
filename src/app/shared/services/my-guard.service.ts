import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class MyGuard implements CanActivate{
	logged:boolean = false;
	constructor ( private auth:AngularFireAuth ){
		this.auth.authState.subscribe( resp => {

			if ( resp && resp.uid ){
				this.logged = true;
			}else{
				this.logged = false;
			}
		}, error => {
			this.logged = false;
		})

	}

	canActivate(){
		return this.logged ;
	}

}