import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import {
    AutoFormItemConfigComponent
} from './auto-form-item-config/auto-form-item-config.component';
import { AutoFormItemComponent } from './auto-form-item/auto-form-item.component';
import { DragDropFormComponent } from './drag-drop-form/drag-drop-form.component';

@NgModule({
  declarations: [
    DragDropFormComponent,
    AutoFormItemComponent,
    AutoFormItemConfigComponent
  ],
  imports: [
    SharedModule,
    DragDropModule,
    RouterModule.forChild([
      {
        path: '',
        children: [{ path: 'drag-drop-form', component: DragDropFormComponent }]
      }
    ])
  ]
})
export class DragDemoModule {}
