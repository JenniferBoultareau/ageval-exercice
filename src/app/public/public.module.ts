import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ActionComponent } from './action/action.component';
import { TableComponent } from './action/table/table.component';
import { ObjectifsService } from '../shared/services/objectifs.service';
import { FormComponent } from './form/form.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [ActionComponent, TableComponent, FormComponent, ContainerComponent],
  imports: [
    SharedModule,
    PublicRoutingModule,
    FormsModule
  ],
  exports:[ActionComponent],
  providers: [ObjectifsService]
})
export class PublicModule { }
