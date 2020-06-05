import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementshomeComponent } from './elementshome/elementshome.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';


@NgModule({
  declarations: [ElementshomeComponent, PlaceholderComponent, TimesDirective],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  // exports:[]
})
export class ElementsModule { }
