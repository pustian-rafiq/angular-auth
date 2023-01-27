import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn = false;
  title = 'angular-auth';

  authBtn: any = 'Login';

  constructor(private authService: AuthService) {
    console.log('first');
  }
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.authBtn = 'Logout';
      this.isLoggedIn = true;
    }
  }
}
