import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementshomeComponent } from './elementshome/elementshome.component';



const routes: Routes = [
  { path: '', component: ElementshomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
