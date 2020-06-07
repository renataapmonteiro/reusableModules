import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionshomeComponent } from './collectionshome/collectionshome.component';
import { TableComponent } from './table/table.component';
import { BiographyComponent } from './biography/biography.component';
import { PartnersComponent } from './partners/partners.component';
import { CompanyComponent } from './company/company.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [CollectionshomeComponent, TableComponent, BiographyComponent, PartnersComponent, CompanyComponent, TabsComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  // exports: []
})
export class CollectionsModule { }
