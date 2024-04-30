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
  //private usersService: UsersService,
  constructor(private fb: FormBuilder, route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ValidarFormulario();
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form.value);
    // this.usersService.registrarUsuario(this.form.value).subscribe(res => {
    //   console.log('Usuario creado satisfactoriamente');
    //   this.router.navigateByUrl('pages/login');
    // })
  }

  ValidarFormulario() {
    this.form = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      lastname: this.fb.control(null, [Validators.required]),
      userb: this.fb.control(null, [Validators.required]),
      idtype_id: 2,
      idnumber: this.fb.control(null, [Validators.required]),
      dateofbirth: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null, [Validators.required]),
      password_confirmation: this.fb.control(null, [Validators.required]),

    });
  }
  //new
  registerForm = this.fb.group({
    telefonos: this.fb.array([])
  })


  agregarTelefonos() {
    const telefonoFormGroup = this.fb.group({
      telefono: '',
      descripcion: ''
    });
    this.telefonos.push(telefonoFormGroup);
  }

  removerTelefono(indice: number) {
    this.telefonos.removeAt(indice);
  }

  get telefonos() {
    return this.registerForm.get('telefonos') as FormArray;
  }
  get name() {
    return this.form.get('name');
  }
  get lastname() {
    return this.form.get('lastname');
  }
  get userb() {
    return this.form.get('userb');
  }
  get idnumber() {
    return this.form.get('idnumber');
  }
  get dateofbirth() {
    return this.form.get('dateofbirth');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get password_confirmation() {
    return this.form.get('password_confirmation');
  }


  refescar() {
    this.telefonos.controls.splice(0, this.telefonos.length);
  }
}
