import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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


  animar(){
    this.state = ( this.state === "final") ? "inicial" : "final";
  }
  
}
