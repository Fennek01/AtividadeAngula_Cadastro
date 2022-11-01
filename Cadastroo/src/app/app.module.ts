import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { AppRountingModule } from './app-routing.module';
import { DataBindingModule } from './pages/data-binding/data-binding.module';
import { MostrarModule } from './pages/Mostrar/Mostrar.module';
import { FormsModule } from '@angular/forms';
import { DivisorModule } from './pages/data-binding/divisor/divisor.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    DataBindingModule,
    AppRountingModule,
    DivisorModule,
    MostrarModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
