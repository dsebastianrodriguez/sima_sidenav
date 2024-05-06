import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../_service/profile.service';
import { User } from '../_model/user';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public helper = new JwtHelperService();
  private token = sessionStorage.getItem(environment.TOKEN) ?? '';
  private decodedToken = this.helper.decodeToken(this.token);

  public profile: User = {}; 
  private router = inject(Router);
  private profileService = inject(ProfileService)

  
  ngOnInit(): void {
    console.log("***");
    this.mostrarPerfil();
  }

  mostrarPerfil(){
    const user = this.decodedToken.user;
    this.profileService.miPerfil(user).subscribe(data=>{
      this.profile = data.user;
      console.log("perfil: ",this.profile);
    });
  }
}
