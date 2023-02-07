import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
];

// This code workd for roles base guard

// export const ROUTES: Routes = [
//   { path: '', component: HomeComponent },
//   {
//     path: 'profile',
//     component: ProfileComponent,
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'admin',
//     component: AdminComponent,
//     canActivate: [RoleGuard],
//     data: {
//       expectedRole: 'admin'
//     }
//   },
//   { path: '**', redirectTo: '' }
// ];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
