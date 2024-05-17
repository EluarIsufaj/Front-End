import { Component } from '@angular/core';
import { User } from 'src/models/shared/user';
import { Category } from 'src/models/shared/category';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  loginIn : Boolean = false

  changeLogIn(value : Boolean){
   this.loginIn = value
  }

  user: User | null = null;

  addingProduct : Boolean = false

  state : String = ""

  categories: Category[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Furniture' },
    { id: 4, name: 'Books' },
    { id: 5, name: 'Sports Equipment' },
    { id: 14, name: 'Gadgets' },
    { id: 15, name: 'Any' }
  ];

  selectedCategory : Category = this.categories[0];
  
  updateProductAddingState(stateOfProductAdding : Boolean){
    this.addingProduct = stateOfProductAdding
  }

  updateUser(user : User){
    console.log("Received user: "+ user.fullname)
    this.user = user
    this.state = "Signed"
    console.log(this.user?.email)
  }

  showProductsFiltered(productCategory : Category){
    this.selectedCategory = productCategory;
  }
 

  title = 'webstore';
}
