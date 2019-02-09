import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[resaltar]'
})

export class ResaltarDirective implements OnInit {
  constructor( private elRef:ElementRef, private renderer:Renderer2 ){

  }
  @Input('named') plan : string = '';
  @Input('resaltar') plan2: string = '';
  ngOnInit( ){
    if ( this.plan2 == "pagado"){
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow')
      this.renderer.setStyle(this.elRef.nativeElement, 'font-weight','bold');
    }
    console.log( this.plan );
  }
  
}