import Product from "./products";

describe("products unit test", () => {
  test("should have a name", () => {
    const product = new Product("Product 1");
    expect(product.name).toBe("Product 1");
  });

  test("should throw an error if cost is negative", () => {
    const product = new Product("Iphone");

    expect(() => {
      product.cost = -1;
    }).toThrowError("Cost cannot be negative");
  });

  test("should set the cost of a product", () => {
    const product = new Product("Iphone");
    product.cost = 100;
    expect(product.cost).toBe(100);
  });

  test("should set the salesPrice by 3 times the cost of the product", () => {
    const product = new Product("Iphone");
    product.cost = 100;
    expect(product._salesPrice).toBe(300);
  });
});
