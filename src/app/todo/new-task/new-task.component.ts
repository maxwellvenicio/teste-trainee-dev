import { Component } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { TodoService } from '../../shared/services/todo.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  newTaskTitle: string = '';
  showError: boolean = false;

  constructor(private todoService: TodoService) { }

  addTask() {

    //verificação espaços ou brancos.
    const title = this.newTaskTitle.trim();
    
    if (!title) {
    this.showError = true;
    return;
    }
    
    const newTodo: Todo = {
    id: this.todoService.getTodoNewId(),
    title,
    completed: false
    };
    
    this.todoService.addTodo(newTodo);
    this.newTaskTitle = '';
    this.showError = false; 
  }
}