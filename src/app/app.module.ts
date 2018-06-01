import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMdModule } from 'ngx-md';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxMdModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
