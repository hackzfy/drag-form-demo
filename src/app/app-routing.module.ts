import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'drag-demo',
    loadChildren: './drag-demo/drag-demo.module#DragDemoModule'
  },
  { path: 'boards', loadChildren: './boards/boards.module#BoardsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
