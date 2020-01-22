import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ActionComponent } from './action/action.component';
import { ContainerComponent } from './container/container.component';
import { Action } from 'rxjs/internal/scheduler/Action';


const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: ActionComponent
      }
    ]
  },
  {
    path: 'formulaire',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
