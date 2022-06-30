import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  searchText: any
  category: any

  categoryFilter(category: any) {
    this.category = category
  }

  constructor(public coursesService: CoursesService, public info: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
