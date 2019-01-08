import { Component, OnInit } from '@angular/core';
import {CervezasService} from '../cervezas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public listaCervezas: any[];

  constructor(private cervezas: CervezasService, private _router: Router) { }

  ngOnInit() {
  }

  buscarCervezaPorNombre(event: any){
    let nombreCerveza = event.target.value;

    this.cervezas.obtenerCervezasPorNombre(nombreCerveza).subscribe(
      (listaCervezas)=>{
        this.listaCervezas = listaCervezas;
      }
    )
  }



}
