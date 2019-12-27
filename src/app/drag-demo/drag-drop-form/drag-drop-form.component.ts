import { v4 } from 'uuid';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop-form',
  templateUrl: './drag-drop-form.component.html',
  styleUrls: ['./drag-drop-form.component.less']
})
export class DragDropFormComponent {
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
