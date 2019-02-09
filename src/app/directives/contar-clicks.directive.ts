import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'li[ContarClicks]'
})
export class ContarClicksDirective {

  clickN = 0;
  @HostBinding('id') opacity:number = .1;
  @HostListener('click', ['$event']) onClick( e ){
    console.log('a', e , "numero de clicks" , this.clickN++ );
    this.opacity += .1;
  }
  constructor() { }

}
