import { BrandModel } from "./BrandModel";
import { CategoryProductModel } from "./CategoryProductModel";

export interface ProductAndBrandModel {
    categories: CategoryProductModel[]; 
    brands: BrandModel[];
  } 