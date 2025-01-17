"use client";
import HeroSection from "@/components/sections/HeroSection";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import ProductSection from "@/components/sections/ProductSections";
import BrandSection from "@/components/sections/BrandSections";
import FooterSection from "@/components/sections/FooterSection";
import { CategoryProductModel } from "@/models/CategoryProductModel";
import { StatusModel } from "@/models/StatusModel";
import LoadingSkeletonProducts from "@/components/common/LoadingSkeletonProducts";
import {
  getHomePageAssets,
  getHomePageProductsAndBrands,
} from "@/utils/redux/actions/page";

export default function Page() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const numberOfSlides = isLg ? 6 : isMd ? 4 : isSm ? 3 : 2;
  const dispatch = useAppDispatch();
  const { homePageProductsAndBrands, homePageAssets, status } = useAppSelector(
    (state: any) => state.reducer
  ); // Dynamic component

  React.useEffect(() => {
    dispatch(getHomePageAssets());
    dispatch(getHomePageProductsAndBrands()); // Dynamic component
  }, []);

  return (
    <Container>
      <div className="px-[1rem] flex flex-col gap-y-[4rem]">
        <HeroSection
          backgroundImage={homePageAssets?.sectionImage}
          ctaLink="/get-started"
        />
        <FeatureSection />
        {homePageProductsAndBrands?.categories?.map(
          (item: CategoryProductModel, index: number) => {
            return (
              <ProductSection
                numberOfSlides={numberOfSlides}
                key={index}
                categoryProduct={item}
              />
            );
          }
        )}
        {status === StatusModel.LOADING && (
          <LoadingSkeletonProducts itemCount={numberOfSlides} />
        )}
        {homePageProductsAndBrands?.brands && (
          <BrandSection
            brands={homePageProductsAndBrands?.brands}
            numberOfSlides={numberOfSlides}
          />
        )}
        <FooterSection />
      </div>
    </Container>
  );
}
