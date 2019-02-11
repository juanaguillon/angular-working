import { Component } from '@angular/core';
import { LugaresService } from '../shared/services/lugares.service';

@Component({
	selector : "app-crear",
	templateUrl: 'crear.component.html'
})

export class CrearComponent{
	lugar:any = {}
	constructor( private lugarService:LugaresService ){}

	guardarLugar( ){
		this.lugarService.guardarLugar( this.lugar );
	}
}