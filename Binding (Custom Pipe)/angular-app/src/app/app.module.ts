import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HideLongStrPipe } from './hide-long-str.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HideLongStrPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
