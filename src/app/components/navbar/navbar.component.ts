import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  loggedIn:boolean;
  brandName = 'Finsweet';

  constructor(private router: Router){
    this.loggedIn = false;
  }

  goToLogin() {
    this.router.navigateByUrl("/login")
  }
}
