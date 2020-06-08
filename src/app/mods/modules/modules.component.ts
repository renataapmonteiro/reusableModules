import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick(){
    this.close.emit();
  }

}
