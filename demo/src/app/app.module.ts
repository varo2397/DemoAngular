import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CervezaComponent } from './cerveza/cerveza.component';
import { AleatoriaComponent } from './aleatoria/aleatoria.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    CervezaComponent,
    AleatoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
