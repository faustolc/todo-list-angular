import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TaskItemComponent,
    TaskListComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TaskItemComponent,
    TaskListComponent,
    TodoListComponent
  ]
})
export class ComponentsModule { }
