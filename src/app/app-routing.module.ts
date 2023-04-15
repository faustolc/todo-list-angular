import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { TaskComponent } from './pages/task/task.component';
import { NewComponent } from './pages/new/new.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'completed', component: CompletedComponent},
  {path: 'new', component: NewComponent},
  {path: 'task/:id', component: TaskComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
