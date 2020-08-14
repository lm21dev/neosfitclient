import { Directive, Renderer2, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Aliment } from '../shared/Interfaces/aliment';

@Directive({
  selector: '[appAlimentElem]'
})
export class AlimentElemDirective {
  selected: boolean;
  @Input() 
  itemSelected: boolean;

  @Input() 
  aliment: Aliment;

  @Input() 
  selectedAliments: Aliment[];

  @Output()
  onSelectedChange = new EventEmitter();

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: any): void{
    if(this.el && !this.selected){
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#7FDCF9');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    }
  }
  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent): void{
    if(this.el  && !this.selected){
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    }
  }
  @HostListener('click', ['$event'])
  onMouseClick(event: MouseEvent): void{
    if (this.el){
      this.selected = !this.selected;

      if (this.selected) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#35ADD2');
        this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
        this.selectedAliments.push(this.aliment);
      }
      else {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
        this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
        this.selectedAliments.splice(this.selectedAliments.findIndex(a => a.libelle === this.aliment.libelle), 1);
      }

      this.itemSelected = this.selectedAliments.length > 0;

      this.onSelectedChange.emit(this.itemSelected);
    }
  }


  // #35ADD2 bleu plus foncé
  constructor(private el: ElementRef, private renderer: Renderer2) {
    if (this.selectedAliments){
      this.itemSelected = false;
    }else{
      this.itemSelected = true;
    }
  }

}
