import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';
import { TodoRoutingModule } from './todo-routing.module';



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule
  ]
})
export class TodoModule { }
