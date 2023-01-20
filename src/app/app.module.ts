import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { AppAcumulador } from './components/acumulador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppAcumulador
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
