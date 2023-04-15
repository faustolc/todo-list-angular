import { Pipe, PipeTransform } from '@angular/core';

import { Task } from '../models/Task';

@Pipe({
  name: 'filterTask'
})
export class FilterTaskPipe implements PipeTransform {

  transform(tasks: Task[], searchTerm: string ): Task[] {
    return tasks.filter(task => {
      if (!searchTerm)
        return true;
      return (task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (task.title.toLowerCase().includes(searchTerm.toLowerCase())));
    })
  }

}
