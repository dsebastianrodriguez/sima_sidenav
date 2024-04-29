import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../_service/profile.service';
import { User } from '../_model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // public profile!: any;
  public profile: User = {}; 
  private router = inject(Router);
  private profileService = inject(ProfileService)
  // constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.mostrarPerfil();
  }

  mostrarPerfil(){
    console.log(this.profile);
    this.profileService.miPerfil().subscribe(data=>{
      // this.nombres = data.user.name;this.apellidos = data.user.lastname;this.usuario = data.user.userb;
      // this.correo = data.user.email;
      console.log(data)
      this.profile = data.user;
      console.log(this.profile);
    });
  }
}
