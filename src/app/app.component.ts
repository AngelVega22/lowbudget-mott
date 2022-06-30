import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escuela-virtual';
  onActive() {
    window.scroll(0, 0)
  }
  constructor(public infoPaginaService: InfoPaginaService,
    public coursesService: CoursesService) {

  }
}
