import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { TodoService } from '../../shared/services/todo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() deletedTodo: EventEmitter<number> = new EventEmitter<number>();

  constructor(private todoService: TodoService) {}

  deleteTodo(): void {
    Swal.fire({
      title: "Tem certeza que deseja apagar essa tarefa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#0c7f36',
      cancelButtonColor: 'red',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.todoService.deleteTodo(this.todo.id);
        this.deletedTodo.emit(this.todo.id); 
        Swal.fire('Excluída!', 'A tarefa foi apagada com sucesso.', 'success');
      }
    });
  }  

  onTaskChecked(): void {
    this.todoService.updateTodo(this.todo);
  }
}
