import { Component, Input } from '@angular/core';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  @Input()titles: Array<string>;

  constructor() { 
    this.titles = ['Travel', 'Love', 'Food'];
  }

  addTopic(titles: HTMLInputElement): boolean{
    if(titles.value) {
      this.titles.push(titles.value)
      return false;
    }
    else {
      alert('Please add a topic')
    }
  }


}
