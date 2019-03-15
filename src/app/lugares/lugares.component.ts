import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../shared/services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations:[
    trigger("destacados", [
      state("inicial", style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      state('final',style({
        opacity: 1,
        transform: "translateX(0%)"
      })),
      transition("inicial => final", animate(1000)),
      transition("final => inicial", animate(1000)),
    ] )

  ]
})
export class LugaresComponent implements OnInit {

  state = "inicial";
  lugares = null;
  constructor( private lugaresService:LugaresService ) { 
    lugaresService.getLugares( )
    	.subscribe( respond => {
        
        this.lugares = respond;
        this.state = "final";
      })
      
  }
  
  ngOnInit() {
  }
  

  animar() {
    this.state = (this.state === "final") ? "inicial" : "final";
  }
}
