export default class Product {
  _name: string;
  _cost: number;

  constructor(name: string, cost?: number) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  set cost(cost: number) {
    if (cost < 0) {
      throw new Error("Cost cannot be negative");
    }

    this._cost = cost;
  }

  get cost(): number {
    return this._cost;
  }

  get salesPrice(): number {
    return this._cost * 3;
  }
}
