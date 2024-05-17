import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/models/shared/user';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Console } from 'console';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  
  ngOnInit(): void {
    }

  
@Output() userSignIn = new EventEmitter<User>()
@Output() processOfLoging = new EventEmitter<Boolean>()


  
  state : String = ""

  loginprocces(value : String = "NotSignedIn"){
    this.processOfLoging.emit(true)
    this.state = value
    if(value == ""){
      this.processOfLoging.emit(false)
    }
  }

  userForm: FormGroup;
  userFormLogin: FormGroup;
  

  constructor(private userService: UserService, private fb: FormBuilder) {

    this.userFormLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.userForm = this.fb.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)]],
      city: [''],
      address: [''],
      logo: [''],
      role: ['Client'] 
    });
   }

   registerUser(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value; 
      this.userService.registerUser(userData).subscribe(
        (response: any) => {
          console.log('Response: ', response);
          this.processOfLoging.emit(false)
          this.userForm.reset();
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    } else {
      
      console.log('Form is invalid.');
    }
  }


  userlogin(): void {
    if (this.userFormLogin.valid){
    const email = this.userFormLogin.value.email; 
    const password = this.userFormLogin.value.password; 
    this.userService.login(email, password).subscribe(
      (user: User) => {
        console.log('Response: ', user);
        this.processOfLoging.emit(false)
        this.userSignIn.emit(user)
        this.userFormLogin.reset();
      },

    (error: any) => {
        console.error('Error:', error);
      }
    );
  } else {
    
    console.log('Form is invalid.');
  }
  }


}
  
