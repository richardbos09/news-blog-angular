import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') private open: boolean = false;
  
  constructor() { }

  @HostListener('click') public toggleOpen(): void {
    this.open = !this.open;
  }
}
