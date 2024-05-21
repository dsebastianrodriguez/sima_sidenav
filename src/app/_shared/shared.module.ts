import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
// import { ModalCustomComponent } from './components/modal-custom/modal-custom.component';
import { RouterModule } from '@angular/router';
import { ModalCustomComponent } from './components/modal-custom/modal-custom.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [
    ModalCustomComponent,
    ModalConfirmationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ModalModule.forRoot(),
    RouterModule.forChild([])
  ],
  exports: [ModalCustomComponent,ModalConfirmationComponent]
})
export class SharedModule { }
