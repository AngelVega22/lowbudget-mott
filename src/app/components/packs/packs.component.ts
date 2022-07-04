import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit {

  detalle: any
  searchText: any

  constructor(private route: ActivatedRoute, public info: InfoPaginaService, public router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.detalle = params['detalle']
        // console.log("YAPAY =")
        // console.log(this.detalle)
      })
  }
  buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;
    }

    this.router.navigate(['/cursos', termino])
    console.log(termino)
  }
}


