import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FormDateComponent } from './modules/form-date/form-date.component';

const routes: Routes = [
  { path: '', component:FormDateComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }