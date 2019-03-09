import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../shared/services/lugares.service';

@Component({
	selector : "app-crear",
	templateUrl: 'crear.component.html'
})

export class CrearComponent{
	lugar:any = {}
	id: any = null;
	constructor( private lugarService:LugaresService, private route:ActivatedRoute ){
		this.id = this.route.snapshot.params["id"];
		if ( this.id != "new" ){
			let e = this.lugarService.getLugar( this.id );
			e.where('id','==', this.id ).get().then( a => console.log( a))
		}
	}

	guardarLugar( ){
		this.lugarService.guardarLugar( this.lugar );
	}

}