import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users'; // Your Spring Boot API URL

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, user);
  }

  login(email: any, password : any): Observable<any> {
    const url = `${this.apiUrl}/login?email=${email}&password=${password}`;
    return this.http.get<any>(url)
  }


}
