import { ShopProductModel } from "@/models/ShopProductModel";
import ProductCard from "../cards/ProductCard";
import { Pagination } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { GetProductsByQuery, SetCurrentPage } from "@/utils/redux/actions/page";
import { ITEMS_PER_PAGE } from "@/utils/constants";

const itemsPerPage = ITEMS_PER_PAGE; 

const ProductSection = () => {
  const dispatch = useAppDispatch();
  const { searchProducts, currentPage, searchQuery } = useAppSelector((state: any) => state.reducer);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(SetCurrentPage(value));
    dispatch(GetProductsByQuery({
      query: searchQuery,
      pageNbr: value,
      pageSize: ITEMS_PER_PAGE,
      sortingOption: searchProducts?.selectedFilterSort?.sortingOption,
      brands: searchProducts?.selectedFilterSort?.brands,
      categories: searchProducts?.selectedFilterSort?.categories,  
    }))
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-wrap items-center justify-center w-full gap-2 sm:gap-4">
        {searchProducts?.products?.map((item: ShopProductModel, index: number) => {
          if (item?.media) {
            return <ProductCard key={index} product={item} addToCart={true}/>;
          }
        })}
      </div>
      {/* Pagination */}
      {searchProducts?.products?.length > 0 && (
        <div className="mt-4">
          <Pagination
            count={Math.ceil(searchProducts?.totalProducts / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="secondary"
          />
        </div>
      )}
    </div>
  );
};

export default ProductSection;
