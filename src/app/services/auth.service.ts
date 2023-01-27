import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiurl = 'http://localhost:3000/user';

  RegisterUser(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  getUser(id: any) {
    return this.http.get(this.apiurl + '/' + id);
  }
  GetUsers() {
    return this.http.get(this.apiurl);
  }
  updateUser(id: any, inputdata: any) {
    return this.http.put(this.apiurl + '/' + id, inputdata);
  }
  getUserRole() {
    return this.http.get('http://localhost:3000/role');
  }
  isLoggedIn() {
    return sessionStorage.getItem('username') != null;
  }
  getRole() {
    return sessionStorage.getItem('role') != null
      ? sessionStorage.getItem('role')?.toString()
      : '';
  }
}
