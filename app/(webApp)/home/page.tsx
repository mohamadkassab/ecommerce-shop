"use client";
import HeroSection from "@/components/sections/HeroSection";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import CategoryProductsSection from "@/components/sections/CategoryProductsSection";
import BrandSection from "@/components/sections/BrandSections";
import FooterSection from "@/components/sections/FooterSection";
import { CategoryProductModel } from "@/models/CategoryProductModel";
import { StatusModel } from "@/models/StatusModel";
import LoadingSkeletonProducts from "@/components/common/LoadingSkeletonProducts";
import {
  GetHomePageAssets,
  GetHomePageProductsAndBrands,
  SetSearchValue,
} from "@/utils/redux/actions/page";

export default function Page() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const numberOfSlides = isMd ? 4 : isSm ? 3 : 2;
  const { homePageProductsAndBrands, homePageAssets, status } = useAppSelector(
    (state: any) => state.reducer
  ); // Dynamic component

  React.useEffect(() => {
    dispatch(SetSearchValue("")); 
    dispatch(GetHomePageAssets());
    dispatch(GetHomePageProductsAndBrands()); // Dynamic component
  }, []);

  return (
    <div className="flex flex-col sm:px-[1rem] gap-y-[2rem] sm:gap-y-[4rem] min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-72px)]">
      <HeroSection
        backgroundImage={homePageAssets?.sectionImage}
        ctaLink="/get-started"
      />
      <FeatureSection />

      {status === StatusModel.LOADING && (
        <LoadingSkeletonProducts itemCount={numberOfSlides} />
      )}

      {status != StatusModel.LOADING && homePageProductsAndBrands?.categories?.map(
        (item: CategoryProductModel, index: number) => {
          return (
            <CategoryProductsSection
              numberOfSlides={numberOfSlides}
              key={index}
              categoryProduct={item}
            />
          );
        }
      )}

      {status != StatusModel.LOADING && homePageProductsAndBrands?.brands && (
        <BrandSection
          brands={homePageProductsAndBrands?.brands}
          numberOfSlides={numberOfSlides}
        />
      )}

      <FooterSection />
    </div>
  );
}
