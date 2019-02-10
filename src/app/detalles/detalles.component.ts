import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})


export class DetallesComponent implements OnInit {


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
  ];

  id = null;

  constructor( private activeRoute: ActivatedRoute ) {
  	this.id = this.activeRoute.snapshot.params['id'];
    console.log( this.buscarId () );
  }

  ngOnInit() { }

  buscarId( ){
  	return this.lugares.find(({ id }) => id == this.id || false );
  }

}
