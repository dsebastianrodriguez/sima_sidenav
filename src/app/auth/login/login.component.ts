import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: FormControl = new FormControl('',
    [
      Validators.required,
      Validators.maxLength(50)
    ]
  );

  contrasena: FormControl = new FormControl('',
    [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern(/[a-zA-Z0-9]/)
    ]
  );

  constructor(private authService: AuthService,
    public fb: FormBuilder,
    private router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault();
    this.authService.login(this.usuario.value, this.contrasena.value).subscribe(data => {
      sessionStorage.setItem(environment.TOKEN, data.token);
      this.authService.nabvarReactivo.next(false);
      this.router.navigate(['/profile']);
    },
    error => {
      // Manejar errores de inicio de sesión, por ejemplo, mostrar un mensaje de error al usuario.
      console.error('Error en inicio de sesión:', error);
    });
  }
}
