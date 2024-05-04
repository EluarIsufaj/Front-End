import { Category } from "./category";
import { Author } from "./author";
import { ProductType } from "./productType";

export class Product {
    constructor(
      public id: number,
      public title: string,
      public description: string,
      public thumbnail: string,
      public category: Category,
      public price: number,
      public productType: ProductType,
      public author: Author
    ) {}
  }