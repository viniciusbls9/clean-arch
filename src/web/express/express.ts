import express, { Express } from "express";
import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../database/product.model";

export const app: Express = express();
app.use(express.json());

async function setupDB() {
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });
  sequelize.addModels([ProductModel]);
  await sequelize.sync();
}

setupDB();
