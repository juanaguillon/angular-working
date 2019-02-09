import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  constructor() { }


  lugares = [
    {
      "nombre":"Gary",
      "show": true,
      "plan": 'pagado'
    },
    {
      "nombre":"Mart",
      "show": false,
      "plan": 'gratis'
    },
    {
      "nombre":"Trusta",
      "show": true,
      "plan": "pagado"
    }
  ]
  
  ngOnInit() {
  }

}
