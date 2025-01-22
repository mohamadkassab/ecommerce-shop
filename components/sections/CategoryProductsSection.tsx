"use client"
import { Typography, Button, useTheme, useMediaQuery, Divider } from "@mui/material";
import ProductCard from "../cards/ProductCard";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryProductModel } from "@/models/CategoryProductModel";
import { ShopProductModel } from "@/models/ShopProductModel";
import { useRouter } from 'next/navigation'
import { ROUTES } from "@/utils/constants";

interface CategoryProductsSectionModel{
 categoryProduct: CategoryProductModel;
 numberOfSlides: number;
}

const CategoryProductsSection = ({categoryProduct, numberOfSlides}: CategoryProductsSectionModel) => {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: numberOfSlides,
    slidesToScroll: numberOfSlides,
  };

  return (
    <div className="flex flex-col justify-center w-full gap-x-[1rem] ">
      <div className="flex justify-between items-center w-full">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center">
          <Typography
            sx={{ color: "text.dark" }}
            gutterBottom
            variant="h4"
            component="div"
          >
            {categoryProduct?.categoryName}
          </Typography>
        </div>
        <div className="flex-1 flex justify-end">
          <Button
            size="small"
            variant="outlined"
            onClick={() => {
              const categoryId = categoryProduct?.categoryId;
              const categoryName = categoryProduct?.categoryName;
              router.push(`${ROUTES.PRODUCTSSEARCH.path}?id=${categoryId}&name=${categoryName}`);
            }}
            sx={{
              borderColor: "primary.main",
              color: "primary.main",
              "&:hover": {
                borderColor: "primary.dark",
                color: "primary.dark",
              },
            }}
          >
            View More
          </Button>
        </div>
      </div>
      <Slider {...settings}>
        {
          categoryProduct?.products?.map((item: ShopProductModel, index: number) =>{
            return (
              <div key={index}>
                <ProductCard product={item} key={index} />
              </div>
            );
          })
        }
      </Slider>
    </div>
  );
};

export default CategoryProductsSection;
