import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/shared/user';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  

   user = new User('', '', '', '', '', '', '', '');


  constructor() { }

  ngOnInit(): void {
  }

}
