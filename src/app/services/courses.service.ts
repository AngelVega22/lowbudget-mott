import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '../interfaces/courses.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  cargando = true;
  cursos: ICourse[] = [];
  cursoFiltrado: ICourse[] = []
  categoriaFiltrado: ICourse[] = []
  packageFiltrado: ICourse[] = []
  constructor(private http: HttpClient) {
    this.cargarCursos()

  }

  private cargarCursos() {
    return new Promise<void>((resolve, reject) => {

      this.http.get('https://escuela-yapay-default-rtdb.firebaseio.com/cursos_idx.json')
        .subscribe((resp: any) => {
          // console.log(resp)
          // setTimeout(() => {
          this.cargando = false
          this.cursos = resp
          // }, 1000)
          resolve();
        })
    })
  }

  getCurso(id: string) {
    return this.http.get(`https://escuela-yapay-default-rtdb.firebaseio.com/cursos/${id}.json`)
  }

  buscarCurso(termino: string) {
    if (this.cursos.length === 0) {
      this.cargarCursos().then(() => {
        this.filtarCursos(termino)

      })
    } else {
      this.filtarCursos(termino)
    }
  }

  private filtarCursos(termino: string) {
    // console.log(this.cursos)
    termino = termino.toLocaleLowerCase()
    this.cursoFiltrado = []

    this.cursos.forEach(curso => {

      const tituloLower = curso.titulo?.toLocaleLowerCase()

      if (curso.pack == termino || curso.pack_two == termino || curso.pack_three == termino) {
        this.cursoFiltrado.push(curso)
        // console.log(this.packageFiltrado)
      }
      if (curso.categoria?.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.cursoFiltrado.push(curso)

      }
      if (curso.categoria == termino) {
        this.categoriaFiltrado.push(curso)
        // console.log(this.categoriaFiltrado)
      }
    })
  }
}
