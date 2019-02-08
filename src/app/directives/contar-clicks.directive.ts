import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[ContarClicks]'
})
export class ContarClicksDirective {

  clickN = 0;
  @HostListener('click', ['$event.target']) onClick( btn ){
    console.log('a',btn , "numero de clicks" , this.clickN++ );
  }
  constructor() { }

}
