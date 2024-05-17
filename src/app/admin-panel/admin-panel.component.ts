import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/models/shared/product';
import { Category } from 'src/models/shared/category';
import { ProductType } from 'src/models/shared/productType';
import { Author } from 'src/models/shared/author';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {



 productFormState : boolean = false;



 @Output() addingProduct = new EventEmitter<Boolean>()


changeState(boolean : Boolean){
  this.productFormState = !this.productFormState
  this.addingProduct.emit(boolean)
}


  productTypes: ProductType[] = [
    ProductType.LAPTOP,
    ProductType.SMARTPHONE,
    ProductType.TELEVISION,
    ProductType.FURNITURE,
    ProductType.CAMERA,
    ProductType.CLOTHING,
    ProductType.BOOK,
    ProductType.SPORTS_EQUIPMENT,
    ProductType.TOY,
    ProductType.JEWELRY,
    ProductType.ART_SUPPLIES,
    ProductType.AUTOMOTIVE_PART,
    ProductType.MUSICAL_INSTRUMENT,
    ProductType.OFFICE_EQUIPMENT
  ];

 categories: Category[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Furniture' },
    { id: 4, name: 'Books' },
    { id: 5, name: 'Sports Equipment' },
    { id: 14, name: 'Gadgets' }
  ];
  
  authors: Author[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'David Johnson' },
    { id: 4, name: 'Emily Brown' },
    { id: 11, name: 'Michael Wilson' },
  ];




  productForm : FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder) { 
      this.productForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        description: ['', [Validators.required]],
        thumbnail: ['', [Validators.required]],
        category: ['', [Validators.required]],
        price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        productType: ['', Validators.required],
        author: ['', Validators.required]

      })
  }


  createProduct(){
    const category : Category | undefined = this.categories.find(category => category.id === parseInt(this.productForm.value.category))
    const author : Author | undefined = this.authors.find(author => author.id === parseInt(this.productForm.value.author)) 
    
    if(category && author){
      if(this.productForm.valid){
        this.productService.createProduct(this.productService.asign(this.productForm, category, author)).subscribe(
          (response: any) => {
            console.log('Response: ', response);
            this.addingProduct.emit(false)
            this.productFormState = !this.productFormState
            this.productForm.reset();
          },
          (error: any) => {
            console.error('Error:', error);
          }
        );

        
      }else(console.log("Invalid Details"))
    }

   
  }



  



  ngOnInit(): void {
  }

}
