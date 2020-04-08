import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSaleComponent } from './new-sale/new-sale.component';

const routes: Routes = [{path:'newSale', component:NewSaleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
