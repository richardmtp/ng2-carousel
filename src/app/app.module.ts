import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Ng2CarouselModule } from './ng2-carousel/ng2-carousel.module';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    Ng2CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
