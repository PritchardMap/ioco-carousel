import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostComponent } from './layout/host/host.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { IocoCarouselLibModule } from 'ioco-carousel-lib';

@NgModule({
  declarations: [AppComponent, HostComponent, HomeComponent, CarouselComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IocoCarouselLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
