export interface AddressViewModel {
  street: string,
  number: string,
  complement: string,
  complement2: string,
  complement3: string,
  region: string,
  postalCode: string,
  state: string,
  city: string,
  country: string
}
export interface CreateUserViewModel {
  name: string,
  surname: string,
  email: string,
  document: string,
  address: AddressViewModel[],
  phone: string,
  password: string,
  blocked: boolean,
  active: boolean,
  customProperties: string
}