import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductInfoTableComponent } from './components/product-info-table/product-info-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [
    { path: 'home', component: ProductHomeComponent },
    { path: 'product-info', component: ProductInfoTableComponent },
    { path: '**', component: ProductHomeComponent }, 
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }