import { ActivityReadComponent } from './components/activity/activity-read/activity-read.component';
import { ActivityCreateComponent } from './components/activity/activity-create/activity-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'atividades/criar',
    component: ActivityCreateComponent
  },
  {
    path: 'atividades',
    component: ActivityReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
