import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  
  @Input()
  todo!: ToDo;
  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter();

  onClick(todo:ToDo){
    this.todoDelete.emit(todo);
    console.log("Onclick is triggered")
  }

}
