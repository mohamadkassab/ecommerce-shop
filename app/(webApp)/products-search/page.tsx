"use client";
import LoadingSkeletonProducts from "@/components/common/LoadingSkeletonProducts";
import FooterSection from "@/components/sections/FooterSection";
import { StatusModel } from "@/models/StatusModel";
import { useAppSelector } from "@/utils/redux/hooks";
import {
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useAppDispatch } from "@/utils/redux/hooks";
import { GetProductsByQuery, SetSearchValue } from "@/utils/redux/actions/page";
import ProductSection from "@/components/sections/ProductSection";
import FilterComponent from "@/components/inputs/FilterComponent";
import { ShopProductModel } from "@/models/ShopProductModel";
import { ITEMS_PER_PAGE } from "@/utils/constants";

const Page = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const numberOfSlides = isLg ? 6 : isMd ? 4 : isSm ? 3 : 2;
  const query = searchParams.get("query");
  const { searchProducts, status } = useAppSelector((state: any) => state.reducer);
  const [searchProductsFiltered, setSearchProductsFiltered] = useState<ShopProductModel[]>(searchProducts?.products);

  React.useEffect(() => {
    if(query){
      dispatch(
        GetProductsByQuery({
          query: query,
          pageNbr: 1,
          pageSize: ITEMS_PER_PAGE,
        })
      );
    }
  }, [query]);

  React.useEffect(() =>{
      setSearchProductsFiltered(searchProducts?.products);
  }, [searchProducts])

  React.useEffect(()=>{
    if(query){
        dispatch(SetSearchValue(query));
    }
  },[query])

  return (
    <div className="flex flex-col sm:px-[1rem] gap-y-[2rem] sm:gap-y-[4rem] min-h-screen sm:min-h-[calc(100vh-149px)]">
      {status != StatusModel.LOADING && (
        <div className="w-full flex justify-start mb-[-1rem] sm:mb-[-2rem]  ">
          {/* sticky top-[60px] sm:top-[72px] bg-white z-[1000] py-[1rem] */}
          <div className="flex gap-x-[1rem] w-full justify-end">
            {/* <FilterComponent searchProductsOriginal={searchProducts} setSearchProductsFiltered={setSearchProductsFiltered} /> */}
          </div>
        </div>
      )}

      {status === StatusModel.LOADING && (
        <LoadingSkeletonProducts itemCount={numberOfSlides} />
      )}

      {status != StatusModel.LOADING && (
        <ProductSection totalProducts={searchProducts?.totalProducts} products={searchProductsFiltered} query={query || ""}/>
      )}

      <FooterSection />
    </div>
  );
};

export default Page;
