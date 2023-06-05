import { Component, EventEmitter, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent {
   todoTitle: string | undefined;
   todoDesc:string | undefined;
   @Output() todoAdd: EventEmitter<ToDo> = new EventEmitter();

   constructor(){}

   onSubmit(){
    const todo = {
      sno:8,
      title:this.todoTitle,
      desc:this.todoDesc,
      active:true
    }
    this.todoAdd.emit(todo);
   }

}
