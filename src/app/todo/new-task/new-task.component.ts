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

    if(!this.newTaskTitle.trim()) {
      this.showError = true;
      return;
    }
    
    const titles = this.newTaskTitle.split('|');

    titles.forEach(title => {
      const cleanTitle = title.trim();
      if(cleanTitle){
        const newTodo: Todo = {
        id: this.todoService.getTodoNewId(),
        title: cleanTitle,
        completed: false
       };
       this.todoService.addTodo(newTodo);
      }
    });
    this.newTaskTitle = '';
  }
}