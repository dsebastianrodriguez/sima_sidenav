import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
    if (this.form.valid) {
      console.log(this.form.value);
      console.log("password: ",this.form.value.password, "confirmation_ password ", this.form.value.password_confirmation);

    }
    // console.log(this.form.value);
    // this.usersService.registrarUsuario(this.form.value).subscribe(res => {
    //   console.log('Usuario creado satisfactoriamente');
    //   this.router.navigateByUrl('pages/login');
    // })
  }

  ValidarFormulario() {
    this.form = this.fb.group({
      name: this.fb.control(null, [Validators.required, Validators.minLength(15), Validators.maxLength(100), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      idnumber: this.fb.control(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^[1-9]\d*$/)]),
      email: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.email]),
      usuario: this.fb.control(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^[^\s{}[\]^%<>?!`~"'=+|\\,:\/]+$/)]),
      password_confirmation: this.fb.control(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^[^\s{}[\]^%<>?!`~"'=+|\\,:\/]+$/)]),
    });
  }

  get usuario() {
    return this.form.get('usuario');
  }
  get name() {
    return this.form.get('name');
  }
  get idnumber() {
    return this.form.get('idnumber');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    // console.log("Se ejecuta en agun momento: ",this.form.get('password'));
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
