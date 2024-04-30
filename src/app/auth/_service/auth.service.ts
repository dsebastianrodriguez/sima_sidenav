import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = `${environment.HOST}/api`;
  private http = inject(HttpClient); private router = inject(Router);

  constructor() { }
  // get refresh(){
  //   return this._refresh$;
  // }

  public login(Usuario: string, Password: string){
    const body = `login=${encodeURIComponent(Usuario)}&password=${encodeURIComponent(Password)}`;
    // this.loggedIn.next(true);
    // this.usuarioReactivo.next(true);
    return this.http.post<any>(`${this.url}/login`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
      .set('Authorization', 'Basic' + btoa(`${environment.TOKEN_AUTH}`))
    });
  }
}
