import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { TaskComponent } from './pages/task/task.component';
import { HomeComponent } from './pages/home/home.component';
import { CompletedComponent } from './pages/completed/completed.component';

import { TaskStatusPipe } from './pipes/task-status.pipe';
import { TaskStatusClassPipe } from './pipes/task-status-class.pipe';
import { FormsModule } from '@angular/forms';
import { FilterTaskPipe } from './pipes/filter-task.pipe';
import { NewComponent } from './pages/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HomeComponent,
    CompletedComponent,
    TaskStatusPipe,
    TaskStatusClassPipe,
    FilterTaskPipe,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
