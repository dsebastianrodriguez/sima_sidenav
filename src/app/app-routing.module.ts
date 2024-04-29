import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './auth/profile/profile.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { SecurityComponent } from './components/security/security.component';
import { SupportComponent } from './components/support/support.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NotOk500Component } from './errors/not-ok500/not-ok500.component';
import { MaitenanceComponent } from './errors/maitenance/maitenance.component';
import { ErrorDevelopComponent } from './errors/error-develop/error-develop.component';
import { ErrorUnauthorizedComponent } from './errors/error-unauthorized/error-unauthorized.component';

const routes: Routes = [
  { path: 'applications', component: ApplicationsComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'support', component: SupportComponent },
  { path: 'error-develop', component: ErrorDevelopComponent },
  { path: 'error_unauthorized', component: ErrorUnauthorizedComponent },
  { path: 'error_server', component: NotOk500Component },
  { path: 'maitenance', component: MaitenanceComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
