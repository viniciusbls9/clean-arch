import Product from "../entities/products";

export default interface ProductGateway {
  create(product: Product): Promise<void>;
}
