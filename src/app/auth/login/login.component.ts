import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoggedIn = false;
  authBtn: any = 'Login';
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }
  result: any;

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.authBtn = 'Logout';
      this.isLoggedIn = true;
    }
  }
  loginForm = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  login() {
    if (this.loginForm.valid) {
      this.authService.getUser(this.loginForm.value.id).subscribe((user) => {
        console.log(user);
        this.result = user;
        if (this.result.password === this.loginForm.value.password) {
          if (this.result.isActive) {
            this.toastr.success('Successfully loggedin');
            sessionStorage.setItem('username', this.result.id);
            sessionStorage.setItem('role', this.result.role);
            this.router.navigate(['dashboard']);
          } else {
            this.toastr.error('Please contact Admin', 'InActive User');
          }
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }
}
