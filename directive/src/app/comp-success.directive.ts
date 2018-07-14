import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective 
 {
 
  constructor(private ele :ElementRef)
   {
  }
  @HostListener('mouseover') onmouseover()
  {
    this.ele.nativeElement.style.color="green";
  } 

  @HostListener('mouseleave') onmouseleave()
  {
    this.ele.nativeElement.style.color="black";
  }  

}
