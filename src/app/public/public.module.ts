import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ObjectifsService } from '../shared/services/objectifs.service';

import { ActionComponent } from './plan-action/table/objectif/action/action.component';
import { ContainerComponent } from './container/container.component';
import { FormComponent } from './form/form.component';
import { ObjectifComponent } from './plan-action/table/objectif/objectif.component';
import { PlanActionComponent } from './plan-action/plan-action.component';
import { TableComponent } from './plan-action/table/table.component';


@NgModule({
  declarations: [
    ActionComponent,
    ContainerComponent, 
    FormComponent,
    ObjectifComponent,
    PlanActionComponent,
    TableComponent
  ],
  imports: [
    FormsModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[PlanActionComponent],
  providers: [ObjectifsService]
})
export class PublicModule { }
