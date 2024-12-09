import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a> |
      <a routerLink="/api-data" routerLinkActive="active">API Data</a> |
      <a routerLink="/form" routerLinkActive="active">Form</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
