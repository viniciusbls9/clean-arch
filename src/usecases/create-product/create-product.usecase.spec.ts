import CreateProductUseCase from "./create-product.usecase";

describe("create productusecase unit test", () => {
  test("Should create a product", async () => {
    const input = {
      id: "abc",
      name: "Iphone",
      cost: 100,
    };

    const output = {
      id: "abc",
      name: "Iphone",
      cost: 100,
      salesPrice: 300,
    };

    const createProductUseCase = new CreateProductUseCase();
    const result = await createProductUseCase.execute(input);
    expect(result).toEqual(output);
  });
});
