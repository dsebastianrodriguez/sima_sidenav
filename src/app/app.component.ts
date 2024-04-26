import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simaflor';

  sidenavOpen: boolean = false;

  toggleSidenav() {
    console.log("Me ejecuto");
    this.sidenavOpen = !this.sidenavOpen;
  }
}
