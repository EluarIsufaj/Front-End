import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from 'src/models/shared/product';
import { Category } from 'src/models/shared/category';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  categories: Category[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Furniture' },
    { id: 4, name: 'Books' },
    { id: 5, name: 'Sports Equipment' },
    { id: 14, name: 'Gadgets' },
    { id: 15, name: 'Any' }
  ];

  @Input() newSelectedCategory: Category = this.categories[0];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) { }

  ngOnChanges(): void {
    this.applyCategoryFilter();
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getPagedProducts(0, 12).subscribe(products => {
      this.products = products;
      this.applyCategoryFilter(); 
    });
  }

  applyCategoryFilter(): void {
    if (this.newSelectedCategory) {
      if (this.newSelectedCategory.id === 15) {
        
        this.filteredProducts = this.products;
      } else {
        
        this.filteredProducts = this.products.filter(product => product.category.id === this.newSelectedCategory.id);
      }
    } else {
      
      this.filteredProducts = this.products;
    }

    this.applySearchFilter(); 
  }

  applySearchFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredProducts = this.filteredProducts.filter(product => 
      product.title.toLowerCase().includes(term) || 
      product.description.toLowerCase().includes(term)
    );
  }

  onSearchTermChange(term: string): void {
    this.searchTerm = term;
    this.applyCategoryFilter(); 
  }
}
