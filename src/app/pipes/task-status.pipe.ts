import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../models/Task';

@Pipe({
  name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch (value){
      case Status.active: return 'Active';
      case Status.completed: return 'Completed';
      case Status.deleted: return 'Deleted';
      default: return 'ERROR';
    }
  }

}
