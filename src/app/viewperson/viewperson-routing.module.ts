import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpersonPage } from './viewperson.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpersonPageRoutingModule {}
