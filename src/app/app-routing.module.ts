import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './_api/profile/profile.component';
import { ApplicationsComponent } from './_api/_pages/applications/applications.component';
import { SecurityComponent } from './_api/_pages/security/security.component';
import { SupportComponent } from './_api/_pages/support/support.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'profile', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'support', component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
