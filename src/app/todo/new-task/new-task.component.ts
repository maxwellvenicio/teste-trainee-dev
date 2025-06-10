import { Component } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { TodoService } from '../../shared/services/todo.service';
import { Filter } from 'bad-words';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  newTaskTitle: string = '';
  showProfanityError: boolean = false;

  constructor(private todoService: TodoService) { }

  addTask() {
    this.showProfanityError = false;

    const filter = new Filter()
    filter.addWords(
      'Porra',
      'Foda',
      'Escroto',
      'Escrota',
      'Caralho',
      'Puta',
      'Puto',
      'Cacete',
      'Fudeu',
      'Merda',
      'Bosta',
    );

    const titles = this.newTaskTitle.split('|');

    for(const title of titles){
      const cleanTitle = title.trim();
      if(cleanTitle && filter.isProfane(cleanTitle)){
        this.showProfanityError = true;
        return;
      }
    }

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