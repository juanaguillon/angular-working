import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LugaresService } from '../shared/services/lugares.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})


export class DetallesComponent implements OnInit {


 
  id = null;
  lugar = null;

  constructor( 
    private activeRoute: ActivatedRoute,
    private lugares: LugaresService
   ) {

  	
    this.lugar = this.lugares.buscarId( this.activeRoute.snapshot.params['id'] );
    
  }  

  ngOnInit() { }

  

}
