import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ModulesWithProviders } from '@angular/core';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: CurriculumComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: CurriculumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
