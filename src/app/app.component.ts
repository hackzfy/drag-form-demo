import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { v4 } from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Welcome to zorro!';
  todo = [{ type: 'DATEPICKER' }, { type: 'SELECT' }, { type: 'INPUT' }];
  actions = [];
  done = [];

  activeItem;

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const data = { ...event.item.data, id: v4() };
      this.done.splice(event.currentIndex, 0, data);
    }
  }
  remove(item: any) {
    this.done = this.done.filter(it => it !== item);
  }
  activeConfig(item: any) {
    this.activeItem = item;
  }

  config(value: any) {
    this.done = this.done.map(item => {
      return item.id === this.activeItem.id
        ? {
            ...item,
            ...value
          }
        : item;
    });
    this.activeItem = null;
  }
}
