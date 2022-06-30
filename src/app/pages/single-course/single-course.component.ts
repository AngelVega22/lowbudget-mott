import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { ICourseDetail } from '../../interfaces/courseDetail.interface';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {
  cursoDetalle: any = {}
  constructor(private route: ActivatedRoute, public coursesServices: CoursesService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(parametros => {
        // console.log(parametros['id'])

        this.coursesServices.getCurso(parametros['id'])
          .subscribe((curso: ICourseDetail) => {
            // console.log(curso)
            this.cursoDetalle = curso
          })
      })
  }

}
