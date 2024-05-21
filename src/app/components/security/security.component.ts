import { Component } from '@angular/core';
import { ModalCustomService } from 'src/app/_shared/services/modal-custom.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {

  constructor(private _notificacionesService: ModalCustomService) { }

  ngOnInit() {

  }
  openModal() {
    this._notificacionesService
      .mostrarNotificacionConfirmacion(
        'INFO',
        'Guardar información',
        '¿Está seguro que realizar esta accion ?'
      ).subscribe((reason: string) => {
        console.log(reason);
        //   if (reason === 'OK') {
        //     this.loading = true;
        //     this._estupefacienteService.create(data).subscribe(
        //       (data) => {
        //         this.loading = false;
        //         this._notificacionesService.mostrarNotificacion('SUCCESS',
        //           Alerta, ${ data.Mensaje });
        //         this.router.navigate(['/estupefacientes/registros']);
        //       },
        //       (error) => {
        //         this.errores = parsearErroresAPI(error);
        //         this._notificacionesService.mostrarNotificacion('ERROR',
        //           Error al guardar - ${ error.error.StatusCode },
        //           error.error.Mensaje);
        //         this.loading = false;
        //       }
        //     );
        //   }
        // });

      });
  }
}
