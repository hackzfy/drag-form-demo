import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BoardsRoutingModule } from './boards-routing.module';
import { CultureComponent } from './culture/culture.component';

@NgModule({
  declarations: [CultureComponent],
  imports: [SharedModule, BoardsRoutingModule]
})
export class BoardsModule {}
