export type CountryData = {
  id: string;
  name: string;
  capital: string;
  population: string; // human-readable like "12 millions"
  area: string; // human-readable like "163 610 km²"
  languages: string;
  image: any;
};

export class Country {
  id: string;
  name: string;
  capital: string;
  population: string;
  area: string;
  languages: string;
  image: any;

  constructor(data: CountryData) {
    this.id = data.id;
    this.name = data.name;
    this.capital = data.capital;
    this.population = data.population;
    this.area = data.area;
    this.languages = data.languages;
    this.image = data.image;
  }

  static from(data: CountryData) {
    return new Country(data);
  }
}
