export interface CreateProductInputDTO {
  id: string;
  name: string;
  cost: number;
}

export interface CreateProductOutputDTO {
  id: string;
  name: string;
  cost: number;
  salesPrice: number;
}
