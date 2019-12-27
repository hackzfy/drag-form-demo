import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CultureComponent } from './culture/culture.component';

const routes: Routes = [{ path: 'culture', component: CultureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule {}
