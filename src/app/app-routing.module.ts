import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodpComponent } from './todp/todp.component';

const routes: Routes = [
  {path: '', component: TodpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
