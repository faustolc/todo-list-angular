import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private uri: string = 'http://localhost:8080/todo/api';

  constructor(private http: HttpClient) { }

  getActiveTasks() {
    return this.http.get<Task[]>(`${this.uri}/active`);
  }

  getCompletedTasks() {
    return this.http.get<Task[]>(`${this.uri}/completed`);
  }

  getTask(id: number) {
    return this.http.get<Task>(`${this.uri}/task/${id}`);
  }

  addTask(task:Task){
    return this.http.post<Task>(`${this.uri}/add`,task);
  }

  updateTask(task:Task){
    return this.http.put<Task>(`${this.uri}/update`,task);
  }
}
