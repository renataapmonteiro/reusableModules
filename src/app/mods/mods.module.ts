import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModulesComponent } from './modules/modules.component';
import { ModulesHomeComponent } from './modules-home/modules-home.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [ModulesComponent, ModulesHomeComponent, AccordionComponent],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
