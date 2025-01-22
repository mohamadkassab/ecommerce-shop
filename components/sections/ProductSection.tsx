import { ShopProductModel } from "@/models/ShopProductModel";
import ProductCard from "../cards/ProductCard";

interface ProductSectionModel {
  products: ShopProductModel[];
}

const ProductSection = ({ products }: ProductSectionModel) => {
  return (
    <div className="flex flex-wrap items-center justify-center  gap-2 sm:gap-4">
      {products?.map?.((item: ShopProductModel, index: number) => {
        if(item?.media){
          return <ProductCard key={index} product={item} />;
        }
      })}
    </div>
  );
};

export default ProductSection;
