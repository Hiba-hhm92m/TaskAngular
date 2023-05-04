import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'student-details/:id',
    loadChildren: () => import('./student-details/student-details.module').then( m => m.StudentDetailsPageModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then( m => m.StudentsPageModule)
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
