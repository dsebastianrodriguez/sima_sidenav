import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { ModalConfirmationComponent } from '../components/modal-confirmation/modal-confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class ModalCustomService {

  bsModalRef!: BsModalRef;
  status = null;
  constructor(private bsModalService: BsModalService) { }

  // muestra el modal de notificación
  // mostrarNotificacion(
  //   // Tipos INFO, SUCCESS, WARNING y ERROR
  //   tipo: string,
  //   titulo: string,
  //   mensaje: string,
  //   enIngles: boolean = false
  // ): Observable<string> {
  //   const initialState = {
  //     tipo,
  //     titulo,
  //     mensaje,
  //     enIngles: enIngles,
  //   };
  //   this.bsModalRef = this.bsModalService.show(
  //     NotificacionesModalComponent,
  //     Object.assign(
  //       {},
  //       {
  //         class: 'modal-lg',
  //         backdrop: true,
  //         ignoreBackdropClick: true,
  //       },
  //       { initialState }
  //     )
  //   );
  //   return new Observable<string>(this.getNotificacionSubscriber());
  // }

  // suscripción confirmación
  private getConfirmSubscriber() {
    return (observer: any) => {
      const subscription = this.bsModalService.onHidden.subscribe(
        (reason: string) => {
          observer.next(this.bsModalRef.content.answer);
          observer.complete();
        }
      );
      return {
        unsubscribe() {
          subscription.unsubscribe();
        },
      };
    };
  }

  // notifica al suscriptor
  private getNotificacionSubscriber() {
    return (observer: any) => {
      const subscription = this.bsModalService.onHidden.subscribe(
        (reason: string) => {
          observer.next('OK');
          observer.complete();
        }
      );

      return {
        unsubscribe() {
          subscription.unsubscribe();
        },
      };
    };
  }

  // muestra modal confirmación
  mostrarNotificacionConfirmacion(
    tipo: string,
    titulo: string,
    mensaje: string,
    enIngles: boolean = false
  ): Observable<string> {
    const initialState = {
      tipo,
      titulo,
      mensaje,
      enIngles: enIngles,
    };
    this.bsModalRef = this.bsModalService.show(
      ModalConfirmationComponent,
      Object.assign(
        {},
        {
          class: 'modal-lg',
          backdrop: true,
          ignoreBackdropClick: true,
        },
        { initialState }
      )
    );
    return new Observable<string>(this.getNotificacionSubscriberConfirm());
  }

  // suscripción notificación confirmación
  private getNotificacionSubscriberConfirm() {
    return (observer: any) => {
      const subscription = this.bsModalRef.content.onClose.subscribe(
        (result: boolean) => {
          result ? observer.next('OK') : observer.next('CANCEL');
          observer.complete();
          return {
            unsubscribe() {
              subscription.unsubscribe();
            },
          };
        }
      );
    };
  }
}
