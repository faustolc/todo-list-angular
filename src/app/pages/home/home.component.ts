import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taskList: Task[] = [];
  query: any;

  constructor(private taskServe: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.taskServe.getActiveTasks().subscribe(tasks => this.taskList = tasks);
  }

  addTask(): void {
    this.router.navigate(['/new']);
  }

  navigateCompleted() {
    this.router.navigate(['/completed']);
  }

  updateTasks(){
    this.taskServe.getActiveTasks().subscribe(tasks => this.taskList = tasks);
  }

}
