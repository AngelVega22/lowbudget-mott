import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private route: ActivatedRoute, public coursesService: CoursesService, public info: InfoPaginaService) { }
  termino: any

  ngOnInit(): void {

    this.route.params
      .subscribe(params => {
        this.termino = params['termino']
        console.log(this.termino)
        console.log(params['termino'])
        this.coursesService.buscarCurso(params['termino'])
      })
  }

}
