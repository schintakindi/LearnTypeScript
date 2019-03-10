export class Address {
  streetName: string;
  postCode: number;
  city: string;
  state: string;

  constructor(street: string, postcode: number, city: string, state: string) {
    this.city = city;
    this.streetName = street;
    this.state = state;
    this.postCode = postcode;
  }
}
