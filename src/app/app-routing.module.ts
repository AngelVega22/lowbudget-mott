import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCourseComponent } from './pages/single-course/single-course.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { SearchComponent } from './components/search/search.component';
import { PacksComponent } from './components/packs/packs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: 'docentes', component: TeachersComponent },
  { path: 'cursos/:termino', component: SearchComponent },
  { path: 'curso/:id', component: SingleCourseComponent },
  { path: 'paquetes/:detalle', component: PacksComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
