import Product from "../../entities/products";
import {
  CreateProductInputDTO,
  CreateProductOutputDTO,
} from "./create-product.dto";

export default class CreateProductUseCase {
  async execute(input: CreateProductInputDTO): Promise<CreateProductOutputDTO> {
    const product = new Product(input.name, input.id);
    product.cost = input.cost;

    return {
      id: product.id,
      name: product.name,
      cost: product.cost,
      salesPrice: product.salesPrice,
    };
  }
}
