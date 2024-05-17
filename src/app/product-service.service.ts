import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/models/shared/product'; // Assuming you have a Product interface/model
import { FormGroup } from '@angular/forms';
import { Category } from 'src/models/shared/category';
import { Author } from 'src/models/shared/author';
import { ProductType } from 'src/models/shared/productType';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/products'; 

  constructor(private http: HttpClient) { }

  getPagedProducts(pageNo: number, pageSize: number): Observable<Product[]> {
    const url = `${this.apiUrl}/productsng?pageNo=${pageNo}&pageSize=${pageSize}`;
    return this.http.get<Product[]>(url);
  }



  asign(frmGroup : FormGroup, category : Category, author : Author) : Product{
 
   

    return new Product(null, frmGroup.value.title, frmGroup.value.description, frmGroup.value.thumbnail, category , parseInt(frmGroup.value.price), frmGroup.value.productType, author)
  }

  createProduct(product : Product) : Observable<any>{
    const url = `${this.apiUrl}/createProduct`;
    return this.http.post<Product>(url, product)
  }


}
