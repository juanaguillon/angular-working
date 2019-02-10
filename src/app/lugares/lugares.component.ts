import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  constructor( ) { 
    
  }


  lugares = [
    {
      "id" : 1,
      "nombre":"Gary",
      "show": true,
      "plan": 'pagado'
    },
    {
      "id" : 2,
      "nombre":"Mart",
      "show": false,
      "plan": 'gratis'
    },
    {
      "id" : 3,
      "nombre":"Trusta",
      "show": true,
      "plan": "pagado"
    }
  ]
  
  ngOnInit() {
  }

}
