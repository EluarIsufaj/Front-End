import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/shared/product';
import { Author } from 'src/models/shared/author';
import { Category } from 'src/models/shared/category';
import { ProductType } from 'src/models/shared/productType';

@Component({
  selector: 'app-storeui',
  templateUrl: './storeui.component.html',
  styleUrls: ['./storeui.component.css']
})
export class StoreuiComponent implements OnInit {

  constructor() { }

   category1 = new Category(1, 'Electronics');
   author1 = new Author(1, 'John Doe');

  ngOnInit(): void {
  }

  products : Product[] = [
    new Product(1, 'Product 1', 'Description of Product 1', 'https://randomwordgenerator.com/img/picture-generator/54e2d7444355ad14f1dc8460962e33791c3ad6e04e507749742c78d6924bc2_640.jpg', this.category1, 19.99, ProductType.BOOK, this.author1),
    new Product(2, 'Product 2', 'Description of Product 2', 'https://randomwordgenerator.com/img/picture-generator/55e9d1464a51b10ff3d8992cc12c30771037dbf85254794e722a7ddc964a_640.jpg', this.category1, 29.99, ProductType.FURNITURE, this.author1),
    new Product(3, 'Product 3', 'Description of Product 3', 'https://randomwordgenerator.com/img/picture-generator/52e0d1404256a914f1dc8460962e33791c3ad6e04e507440742f7cd7904dc5_640.jpg', this.category1, 39.99, ProductType.OFFICE_EQUIPMENT, this.author1),

  ]

}
