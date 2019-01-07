import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuscadorComponent} from './buscador/buscador.component';
import {CervezaComponent} from './cerveza/cerveza.component';
import {AleatoriaComponent} from './aleatoria/aleatoria.component';

const routes: Routes = [
  { path: '', component: BuscadorComponent },
  { path: 'cerveza/:id', component: CervezaComponent },
  { path: 'cerveza/aleatoria', component: AleatoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
