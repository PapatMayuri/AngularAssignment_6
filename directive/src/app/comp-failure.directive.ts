import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele :ElementRef)
   {
  }
  @HostListener('mouseover') onmouseover()
  {
    this.ele.nativeElement.style.color="red";
  } 

  @HostListener('mouseleave') onmouseleave()
  {
    this.ele.nativeElement.style.color="black";
  }  

}
