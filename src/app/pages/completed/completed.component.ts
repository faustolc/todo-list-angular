import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router:Router) { }

  ngOnInit(): void {
    this.taskService.getCompletedTasks().subscribe(tasks => this.tasks = tasks);
  }

  updateTasks() {
    this.taskService.getCompletedTasks().subscribe(tasks => this.tasks = tasks);
  }

  returnHome(){
    this.router.navigate(['/home']);
  }
}
