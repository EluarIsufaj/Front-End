export class User {
   // Properties
  fullname: string;
  username: string;
  email: string;
  password: string;
  city: string;
  address: string;
  logo: string;
  role: string;

  // Constructor
  constructor(fullname: string, username: string, email: string, password: string, city: string, address: string, logo: string, role: string) {
    this.fullname = fullname;
    this.username = username;
    this.email = email;
    this.password = password;
    this.city = city;
    this.address = address;
    this.logo = logo;
    this.role = role;
  }
}