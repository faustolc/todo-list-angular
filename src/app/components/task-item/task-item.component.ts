import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status, Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input('data') task!: Task;
  
  @Output('updated') change: EventEmitter<Status> = new EventEmitter(); 

  constructor(private taskService:TaskService){}

  completeTask(){
    if(this.task.status == Status.active){
      this.task.status = Status.completed;
    }
    else if(this.task.status == Status.completed){
      this.task.status = Status.active;
    }
    this.taskService.updateTask(this.task).subscribe( task => this.change.emit(this.task.status));
  }

  deleteTask(){
    this.task.status = Status.deleted;
    this.taskService.updateTask(this.task).subscribe( task => this.change.emit(this.task.status));
  }

}
