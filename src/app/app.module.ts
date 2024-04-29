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

@NgModule({
  declarations: [
    AppComponent,
    SupportComponent,
    ApplicationsComponent,
    SecurityComponent,
    NotFoundComponent,
    NotOk500Component,
    MaitenanceComponent,
    ErrorDevelopComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
