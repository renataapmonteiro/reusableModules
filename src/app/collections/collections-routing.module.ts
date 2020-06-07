import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionshomeComponent } from './collectionshome/collectionshome.component';
import { CompanyComponent } from './company/company.component';
import { BiographyComponent } from './biography/biography.component'
import { PartnersComponent } from './partners/partners.component'


const routes: Routes = [
  { path: '', 
    component: CollectionshomeComponent,
    children: [
      {path: '', component: BiographyComponent},
      {path: 'partners', component: PartnersComponent},
      {path: 'companies', component: CompanyComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
