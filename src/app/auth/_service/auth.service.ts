import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { encrypt } from 'src/app/_shared/util/util-encryp';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public nabvarReactivo = new Subject<boolean>();

  private url: string = `${environment.HOST}/api`;
  private http = inject(HttpClient); private router = inject(Router);

  constructor() { }

  public login(Usuario: string, Password: string) {
    const body = `login=${encodeURIComponent(encrypt(JSON.stringify(Usuario)))}&password=${encodeURIComponent(encrypt(JSON.stringify(Password)))}`;
    return this.http.post<any>(`${this.url}/login`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        .set('Authorization', 'Basic' + btoa(`${environment.TOKEN_AUTH}`))
    });
  }

  public tokenExpired(){
    sessionStorage.clear();
    this.nabvarReactivo.next(true);
    this.router.navigate(['/login']);
  };

  public logout() {
    const token = sessionStorage.getItem(environment.TOKEN);
    const dto = { "token": token };
    this.http.post(`${this.url}/logout`, dto).subscribe(data => {
      sessionStorage.clear();
      this.nabvarReactivo.next(true);
      this.router.navigate(['/login']);
    });
  }

  public estaLogueado(): boolean {
    const tk = sessionStorage.getItem(environment.TOKEN);
    return tk != null;
  }
}
