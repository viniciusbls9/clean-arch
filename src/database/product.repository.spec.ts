import { Sequelize } from "sequelize-typescript";
import ProductModel from "./product.model";
import ProductRepository from "./product.repository";
import Product from "../entities/products";

describe("Product repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: "memory",
      logging: false,
      sync: { force: true },
    });
    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  test("should create a product", async () => {
    const repository = new ProductRepository();
    const product = new Product("Product 1", "1");
    product.cost = 100;
    repository.create(product);

    const productResult = await ProductModel.findOne({ where: { id: "1" } });

    expect(product).toBeDefined();
    expect(productResult?.id).toBe("1");
    expect(productResult?.name).toBe("Product 1");
    expect(productResult?.cost).toBe(100);
    expect(productResult?.salesPrice).toBe(300);
  });
});
