import { Directive, ElementRef,Renderer } from '@angular/core';


@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective
 {
  constructor(private ele:ElementRef,  public renderer: Renderer) 
  {
    renderer.setElementStyle(ele.nativeElement, 'background', 'yellow');
    renderer.setElementStyle(ele.nativeElement, 'font-Weight', "400");  
     
  }  
  
  
 }