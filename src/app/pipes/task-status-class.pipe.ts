import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../models/Task';

@Pipe({
  name: 'taskStatusClass'
})
export class TaskStatusClassPipe implements PipeTransform {

  transform(value: number): string {
    switch(value){
      case Status.active: return 'text-color-primary';
      case Status.completed: return 'text-color-success';
      case Status.deleted: return 'text-color-danger';
      default: return '';
    }
  }

}
