import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string = `${environment.HOST}/api`;
  private http = inject(HttpClient); private router = inject(Router);
  constructor() { }

  public miPerfil(user: number) {
    return this.http.get<any>(`${this.url}/profile/${user}`);
  }
}
