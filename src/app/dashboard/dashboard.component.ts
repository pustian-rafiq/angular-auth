import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isLoggedIn = false;
  authBtn: any = 'Login';

  constructor(private authService: AuthService, private appCom: AppComponent) {}
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      console.log('dashboard');
      this.authBtn = 'Logout';
      this.isLoggedIn = true;
    }
  }
}
