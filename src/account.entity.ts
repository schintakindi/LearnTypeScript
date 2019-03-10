class Account {
  email: string;
  mobile: string;
  password: string;
  address: Address;

  constructor(email: string, mobile: string, password: string) {
    this.email = email;
    this.mobile = mobile;
    this.password = password;
  }
}
