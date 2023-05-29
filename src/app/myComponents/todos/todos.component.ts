import { Component } from '@angular/core';
import { ToDo } from 'src/app/ToDo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos:ToDo[];

  constructor() {
    this.todos = [
      {
        sno:1,
        title:"title",
        desc:"description",
        active:true
      },
      {
        sno:2,
        title:"title2",
        desc:"description2",
        active:true
      },
      {
        sno:3,
        title:"title3",
        desc:"description3",
        active:true
      },
    ]
  }
  deleteTodo(todo:ToDo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
}
