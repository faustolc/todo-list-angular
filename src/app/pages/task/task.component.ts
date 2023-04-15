import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task!: Task;
  msg: string = '';

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '0';
    this.taskService.getTask(parseInt(id)).subscribe(task => this.task = task);
  }

  returnHome() {
    this.router.navigate(['/home']);
  }

  update(){
    this.taskService.updateTask(this.task).subscribe(
      resp => {
        this.msg = 'All changes saved!'
      });
  }
}
