import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public info: InfoPaginaService, public router: Router) { }

  ngOnInit(): void {
  }
  buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;
    }

    this.router.navigate(['/buscar', termino])
    // console.log(termino)
  }
}
