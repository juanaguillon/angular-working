import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Working';
  listo = true;
  nombre = "";

  constructor( ){
    setTimeout(() => {
      this.listo = false;
    }, 2000);
  }

  makeSomething( ){
    alert('Hello');
  }
}
