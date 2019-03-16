import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../shared/services/lugares.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs";
import { switchMap, map} from 'rxjs/operators';


@Component({
	selector : "app-crear",
	templateUrl: 'crear.component.html'
})

export class CrearComponent{
	geocodeURL = "https://jsonplaceholder.typicode.com/posts";
	lugar:any = {}
	id: any = null;
	private searchField:FormControl;
	results$:Observable<any>;

	constructor( private lugarService:LugaresService, 
		private route:ActivatedRoute,
		private http:HttpClient	){


		this.id = this.route.snapshot.params["id"];
		if ( this.id != "new" ){
			let e = this.lugarService.getLugar( this.id );
			e.subscribe( f => {
				this.lugar = f;
			});
		}



		this.searchField = new FormControl();
		this.results$ =  this.searchField.valueChanges
			.pipe( switchMap ( query => {
				return this.http.get( this.geocodeURL );
			}) );
		// 	map( resp => resp )

		// );

		this.results$.subscribe( ref => {
			console.log( ref );
		} )


		
	}



	guardarLugar( ){
		if (this.id != "new") {
			this.lugar.id = this.id;
			let e = this.lugarService.editarLugar(this.lugar);
		}else{
			let s = this.lugarService.guardarLugar( this.lugar );

		}
	}

}