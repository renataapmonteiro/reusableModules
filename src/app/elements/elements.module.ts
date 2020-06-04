import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementshomeComponent } from './elementshome/elementshome.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [ElementshomeComponent, PlaceholderComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  // exports:[]
})
export class ElementsModule { }
