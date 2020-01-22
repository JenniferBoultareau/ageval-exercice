import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  exports: [
    ModalModule,
    AlertModule,
    PopoverModule,
    BsDropdownModule,
    TooltipModule,
    ProgressbarModule
  ]
})
export class NgxBootstrapModule { }