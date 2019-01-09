import { Component, OnInit } from '@angular/core';
import {CervezasService} from '../cervezas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cerveza',
  templateUrl: './cerveza.component.html',
  styleUrls: ['./cerveza.component.css']
})
export class CervezaComponent implements OnInit {

  informacionCerveza: any;

  constructor(private cervezas: CervezasService, private _route: ActivatedRoute) { }

  ngOnInit() {
    let idCerveza: number = this._route.snapshot.params['id']; //obtener el id de la cerveza por medio de la ruta
    this.cervezas.obtenerCervezaPorId(idCerveza).subscribe(informacionCerveza => { //obtener la informacion de la cerveza a traves de la API
      this.informacionCerveza = informacionCerveza[0]; //una vez asignado el valor ya se puede utilizar
    })

  }

}
