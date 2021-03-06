import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: IInfoPagina = {};
  cargada = false

  equipo: any[] = []
  constructor(private http: HttpClient) {
    this.cargarInfo()
    this.cargarEquipo()
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: IInfoPagina) => {
        this.cargada = true
        this.info = resp;
        // console.log(resp)
      })
  }

  private cargarEquipo() {
    this.http.get('https://escuela-yapay-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        this.cargada = true
        this.equipo = resp
        // console.log(resp)
      })
  }

}
