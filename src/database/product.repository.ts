import Product from "../entities/products";
import ProductGateway from "../gateways/product.gateway";
import ProductModel from "./product.model";

export default class ProductRepository implements ProductGateway {
  async create(product: Product): Promise<void> {
    ProductModel.create({
      id: product._id,
      name: product.name,
      cost: product.cost,
      salesPrice: product.salesPrice,
    });
  }
}
