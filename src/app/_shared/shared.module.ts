import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
// import { ModalCustomComponent } from './components/modal-custom/modal-custom.component';
import { RouterModule } from '@angular/router';
import { ModalCustomComponent } from './components/modal-custom/modal-custom.component';




@NgModule({
  declarations: [
    ModalCustomComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule.forChild([])
  ],
  exports: [ModalCustomComponent]
})
export class SharedModule { }
