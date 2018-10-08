import { Component } from '@angular/core';
import { ToDoItem } from './to-do-items.model';

@Component({
  selector: 'to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent {
  items: ToDoItem[];
  completeTasks: Array<string>;
  pendingTasks: Array<string>

  constructor() { 
    this.items = []
    this.completeTasks = []
  }

  addItem(title: HTMLInputElement, description: HTMLInputElement): boolean {
    if(title.value) {
      console.log(`Item ${title.value} added successfully`)
      this.items.push(new ToDoItem(title.value, description.value));
      title.value=''
      description.value=''
      return false
    }
    else {
      alert('Title cannot be blank')
    }
  }

  completeStatus(title: any){
    this.completeTasks.push(title)
    const index: number = this.items.indexOf(title);
    this.items.splice(index);
  }

}
