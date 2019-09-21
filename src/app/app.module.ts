import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Ng2CarouselModule } from './ng2-carousel/ng2-carousel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
