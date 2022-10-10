import express, { Request, Response } from "express";
import ProductRepository from "../../database/product.repository";
import CreateProductUseCase from "../../usecases/create-product/create-product.usecase";

export const productRouter = express.Router();

productRouter.post("/", async (req: Request, res: Response) => {
  const createProductUseCase = new CreateProductUseCase(
    new ProductRepository()
  );

  try {
    const productDto = {
      id: req.body.id,
      name: req.body.name,
      cost: req.body.cost,
    };

    const output = await createProductUseCase.execute(productDto);
    res.status(200).send(output);
  } catch (error) {
    res.status(500).send(error);
  }
});
