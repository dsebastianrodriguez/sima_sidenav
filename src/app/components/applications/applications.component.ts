import { Component, ViewChild } from '@angular/core';
import { ModalCustomComponent } from 'src/app/_shared/components/modal-custom/modal-custom.component';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {

  @ViewChild('confirmationModal')
  private modalComponent!: ModalCustomComponent;
  modalStyle: string = 'modal-style-primary';
  modalTitle: string = 'Info Confirmation';
  modalBody: string = 'This is a Information Confirmation message';
  modalButtonColor: string = 'btn-primary';
  async openModal() {
    return await this.modalComponent.open();
  }

  getConfirmationValue(value: any) {
    if (value == 'Save click') {
      console.log(value);
    }
  }

  open() {
    this.openModal();
  }

}
