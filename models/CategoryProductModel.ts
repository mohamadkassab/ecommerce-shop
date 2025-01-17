import { ShopProductModel } from "./ShopProductModel";

export interface CategoryProductModel {
    categoryId: number; 
    categoryName: string; 
    products: ShopProductModel[];
  } 