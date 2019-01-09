import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CervezasService {

  URLBase: string = "https://api.punkapi.com/v2/beers";

  constructor(private _http: HttpClient) { }

  obtenerCervezaAleatoria():Observable<any>{
    return this._http.get(this.URLBase + '/random');
  }

  obtenerCervezasPorNombre(nombreCerveza: string):Observable<any>{
    return this._http.get(this.URLBase+'?beer_name='+nombreCerveza);
  }

  obtenerCervezaPorId(idCerveza: number): Observable<any>{
    return this._http.get(this.URLBase+ '/' +idCerveza);
  }
}
