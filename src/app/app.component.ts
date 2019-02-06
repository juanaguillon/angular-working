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
      "show": true
    },
    {
      "nombre":"Mart",
      "show": false
    },
    {
      "nombre":"Trusta",
      "show": true
    }
  ]
  
}
