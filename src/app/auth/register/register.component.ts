import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fechaActual!: Date;
  form!: FormGroup;
  passwordVisible: boolean = false;
  passwordConfirmationVisible: boolean = false;
  //private usersService: UsersService,
  constructor(private fb: FormBuilder, route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ValidarFormulario();
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    this.fechaActual = new Date();
    this.form.value.fecha_creacion = this.fechaActual.toISOString().slice(0, 19).replace('T', ' ');
    if (this.form.valid) {
      if(this.form.value.password !== this.form.value.password_confirmation){
        alert("Las contraseñas no coinciden.");
      }else{
        console.log(this.form.value);
        console.log("password: ",this.form.value.password, "confirmation_ password ", this.form.value.password_confirmation);
      } 
    }
    // console.log(this.form.value);
    // this.usersService.registrarlogin(this.form.value).subscribe(res => {
    //   console.log('login creado satisfactoriamente');
    //   this.router.navigateByUrl('pages/login');
    // })
  }

  ValidarFormulario() {
    
    this.form = this.fb.group({
      nombre: this.fb.control(null, [Validators.required, Validators.minLength(15), Validators.maxLength(100), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      cedula: this.fb.control(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^[1-9]\d*$/)]),
      correo: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.email]),
      telefono: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      login: this.fb.control(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s])[^\s{}[\]^%<>?!`~"'=+|\\,:\/]+$/)]),
      password_confirmation: this.fb.control(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s])[^\s{}[\]^%<>?!`~"'=+|\\,:\/]+$/)]),
      
    });
  }

  get login() {
    return this.form.get('login');
  }
  get nombre() {
    return this.form.get('nombre');
  }
  get cedula() {
    return this.form.get('cedula');
  }
  get telefono() {
    return this.form.get('telefono');
  }
  get correo() {
    return this.form.get('correo');
  }
  get password() {
    return this.form.get('password');
  }
  get password_confirmation() {
    return this.form.get('password_confirmation');
  }

  togglePasswordVisibility(fieldId: string) {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    if (field.type === 'password') {
      field.type = 'text';
      this.passwordVisible = true;
    } else {
      field.type = 'password';
      this.passwordVisible = false;
    }
  }



  togglePasswordCVisibility(fieldId: string) {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    if (field.type === 'password') {
      field.type = 'text';
      this.passwordConfirmationVisible = true;
    } else {
      field.type = 'password';
      this.passwordConfirmationVisible = false;
    }
  }

}
