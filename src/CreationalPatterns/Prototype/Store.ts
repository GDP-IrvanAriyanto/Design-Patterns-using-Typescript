export class Store {
  private name: string;
  private city: string;
  private country: string;
  private category: string;

  public constructor(name: string, city: string, country: string, category: string) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.category = category;
  }

  getName(): string{
      return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setCity(city: string): void {
    this.city = city;
  }

  public setCountry(country: string): void {
    this.country = country;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  clone(): Store{
      return new Store(
          this.name,
          this.city,
          this.country,
          this.category
      )
  }
}
