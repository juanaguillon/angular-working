import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../shared/services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  lugares = null;
  constructor( private lugaresService:LugaresService ) { 
    lugaresService.getLugares( )
    	.subscribe( respond => {
        this.lugares = respond;
      })
      
  }
  
  ngOnInit() {
  }

}
