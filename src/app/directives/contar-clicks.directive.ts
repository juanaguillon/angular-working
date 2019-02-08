import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'li[ContarClicks]'
})
export class ContarClicksDirective {

  clickN = 0;
  @HostBinding('style.opacity') opacity:number = .1;
  @HostListener('click', ['$event.target']) onClick( btn ){
    console.log('a',btn , "numero de clicks" , this.clickN++ );
    this.opacity += .1;
  }
  constructor() { }

}
