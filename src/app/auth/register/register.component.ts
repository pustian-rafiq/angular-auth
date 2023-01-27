import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  registerForm = this.builder.group({
    id: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    name: this.builder.control('', Validators.required),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: this.builder.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ])
    ),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isActive: this.builder.control(false),
  });

  register() {
    if (this.registerForm.valid) {
      this.authService
        .RegisterUser(this.registerForm.value)
        .subscribe((result) => {
          this.toastr.success(
            'Please contact admin for enable access.',
            'Registered successfully'
          );
          this.router.navigate(['auth/login']);
        });
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }
}
