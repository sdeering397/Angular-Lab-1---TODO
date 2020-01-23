import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface ITodo{
  completed: boolean;
  task: string;
}

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements ITodo {

  @Input() completed : boolean;
  @Input() task : string;

  @Output() onComplete = new EventEmitter();

  @Output() deleted = new EventEmitter();

  completedClassList : any;


  constructor() {

   }

   onDelete() {
    this.deleted.emit();
  }

  complete(){
    this.onComplete.emit();
    
  }


  ngOnInit() {
  }

}
