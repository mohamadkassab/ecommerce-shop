export interface ShopProductModel {
    id: number; 
    name: string; 
    price: number;
    discount: number;
    note: string;
    supplier: string;
    brand: string;
    season: string;
    year: number; 
    shortDescription: string;
    longDescription: string;
    weight: number; 
    shippingWeight: number; 
    minOrder: number; 
    maxOrder: number; 
    media? : File;
    quantity: number; 
    categories?: string[];
  } 