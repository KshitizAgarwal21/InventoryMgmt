import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSaleComponent } from './new-sale/new-sale.component';
import { AddstockComponent } from './addstock/addstock.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'newSale', component:NewSaleComponent},
  {path:'addStock', component:AddstockComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
