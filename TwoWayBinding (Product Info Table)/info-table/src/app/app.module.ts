import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductInfoTableComponent } from './components/product-info-table/product-info-table.component';
import { ProductHomeComponent } from './components/product-home/product-home.component';

import { AppRoutingModule } from './app-routing.module'; 



@NgModule({
  declarations: [
    AppComponent,
    ProductInfoTableComponent,
    ProductHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
