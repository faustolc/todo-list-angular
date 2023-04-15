import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Status, Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  task: Task = {
    title: '',
    description: '',
    status: Status.active
  }

  constructor(private taskService: TaskService, private router: Router) { }

  returnHome() {
    this.router.navigate(['/home']);
  }

  addTask() {
    if (this.task.title.length > 0){
      this.taskService.addTask(this.task).subscribe(task => this.router.navigate(['/home']));
    }
  }
}
