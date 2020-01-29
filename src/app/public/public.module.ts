import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PlanActionService } from '../public/services/planAction.service';

import { ActionComponent } from './plan-action/table/objectif/action/action.component';
import { ContainerComponent } from './container/container.component';
import { FormComponent } from './form/form.component';
import { ObjectifComponent } from './plan-action/table/objectif/objectif.component';
import { PlanActionComponent } from './plan-action/plan-action.component';
import { TableComponent } from './plan-action/table/table.component';
import { HttpClientModule } from '@angular/common/http';


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
    SharedModule,
    HttpClientModule
  ],
  exports:[PlanActionComponent],
  providers: [PlanActionService]
})
export class PublicModule { }
