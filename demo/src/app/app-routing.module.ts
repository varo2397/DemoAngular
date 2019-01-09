import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CervezaComponent} from './cerveza/cerveza.component';
import {NavegacionComponent} from './navegacion/navegacion.component';
import {BuscadorComponent} from './buscador/buscador.component';

const routes: Routes = [
  { path: '', component: NavegacionComponent, children:[
      { path: 'buscador', component: BuscadorComponent },
      { path: 'cerveza/:id', component: CervezaComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
