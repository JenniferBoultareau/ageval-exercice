import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ActionComponent } from '../public/action/action.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicModule
  ],
  exports: [ActionComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if(parentModule){
      throw new Error('CoreModule is aldready loaded.');
    }
  }

}
