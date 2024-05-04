import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/models/shared/product'; // Assuming you have a Product interface/model

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/products'; 

  constructor(private http: HttpClient) { }

  getPagedProducts(pageNo: number, pageSize: number): Observable<Product[]> {
    const url = `${this.apiUrl}?pageNo=${pageNo}&pageSize=${pageSize}`;
    return this.http.get<Product[]>(url);
  }
}
