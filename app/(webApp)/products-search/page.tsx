"use client"
import LoadingSkeletonProducts from "@/components/common/LoadingSkeletonProducts";
import FooterSection from "@/components/sections/FooterSection";
import { StatusModel } from "@/models/StatusModel";
import { useAppSelector } from "@/utils/redux/hooks";
import React from "react";
import ProductSection from "@/components/sections/ProductSection";
import FilterComponent from "@/components/inputs/FilterComponent";

const Page = () => {
  const { status } = useAppSelector((state: any) => state.reducer);

  return (
    <div className="flex flex-col sm:px-[1rem] gap-y-[2rem] sm:gap-y-[4rem] min-h-screen sm:min-h-[calc(100vh-149px)]">
      {status != StatusModel.LOADING && (
        <div className="w-full flex justify-start mb-[-1rem] sm:mb-[-2rem]  ">
          {/* sticky top-[60px] sm:top-[72px] bg-white z-[1000] py-[1rem] */}
          <div className="flex gap-x-[1rem] w-full justify-end">
            <FilterComponent/>
          </div>
        </div>
      )}

      {status === StatusModel.LOADING && (
        <LoadingSkeletonProducts/>
      )}

      {status != StatusModel.LOADING && (
        <ProductSection/>
      )}

      <FooterSection />
    </div>
  );
};

export default Page;
