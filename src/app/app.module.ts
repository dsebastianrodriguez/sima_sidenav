import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupportComponent } from './components/support/support.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { SecurityComponent } from './components/security/security.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ErrorInterceptorService } from './errors/_service/error-interceptor.service';
import { NotOk500Component } from './errors/not-ok500/not-ok500.component';
import { MaitenanceComponent } from './errors/maitenance/maitenance.component';
import { ErrorDevelopComponent } from './errors/error-develop/error-develop.component';
import { ErrorUnauthorizedComponent } from './errors/error-unauthorized/error-unauthorized.component';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { SharedModule } from './_shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function tokenGetter(){
  let tk = sessionStorage.getItem(environment.TOKEN);
  return tk != null ? tk : '';
}

@NgModule({
  declarations: [
    AppComponent,
    SupportComponent,
    ApplicationsComponent,
    SecurityComponent,
    NotFoundComponent,
    NotOk500Component,
    MaitenanceComponent,
    ErrorDevelopComponent,
    ErrorUnauthorizedComponent    
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains: [`${environment.IP_PRINCIPAL}`],
        disallowedRoutes: [`${environment.HOST}/api/login`],
      }
    }),
    NgbModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
