export interface TPatient {
  id: number;
  name: string;
  gender: string;
  age: number;
  birthDate: string;
  address: string;
  telecom: String;
}

export interface Entry {
  fullUrl: string;
  resource: Resource;
}

export interface Resource {
  resourceType: String;
  id: String;
  meta: Meta;
  active: Boolean;
  name: Name[];
  gender: String;
  birthDate: String;
  telecom: [Telecom];
  address: [Address];
}

interface Meta {
  versionID: String;
  lastUpdated: String;
  source: String;
}

interface Name {
  use: String;
  family: String;
  given: [String];
  text: string;
}

interface Telecom {
  system: String;
  value: String;
  use: String;
}

interface Address {
  use: String;
  text: String;
  line: [String];
  city: String;
  state: String;
  postalCode: String;
  country: String;
}
