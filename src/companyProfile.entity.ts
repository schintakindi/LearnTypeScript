import Address from "./address";
export class CompanyProfile {
  companyName: string;
  address: Address;
  gstNumber: string;

  constructor(compName: string, address: Address, gstNumber: string) {
    this.gstNumber = gstNumber;
  }
}

var address = new Address("fsd", 500000, "sdfsd", "fsdfs");
let obj = new CompanyProfile("Chintakindi technologies", address, "ggdf345345");
console.log(obj.address.streetName);
