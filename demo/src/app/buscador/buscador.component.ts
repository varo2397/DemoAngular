import { Component, OnInit } from '@angular/core';
import {CervezasService} from '../cervezas.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  listaCervezas: any[];
  formularioCerveza: FormGroup;

  constructor(private cervezas: CervezasService, private _router: Router) { }

  ngOnInit() {
    this.formularioCerveza = new FormGroup({
      'nombreCerveza': new FormControl(null)
    })
  }

  buscarCervezaPorNombre(nombreCerveza: string){


    this.cervezas.obtenerCervezasPorNombre(nombreCerveza).subscribe(
      (listaCervezas)=>{
        this.listaCervezas = listaCervezas;
      }
    )
  }

  enviarFormulario(){

    let nombreCerveza: string = this.formularioCerveza.get('nombreCerveza').value;
    this.buscarCervezaPorNombre(nombreCerveza);

  }



}
