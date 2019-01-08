import { Component, OnInit } from '@angular/core';
import {CervezasService} from '../cervezas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private cervezas: CervezasService, private _router: Router) { }

  ngOnInit() {
  }

  cervezaAleatoria(){
    this.cervezas.obtenerCervezaAleatoria().subscribe( cerveza => {
      this._router.navigate(["cerveza/" + cerveza[0].id])
    });

  }

}
