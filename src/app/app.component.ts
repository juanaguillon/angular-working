import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Working';
  nombre = "";

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
  
}
