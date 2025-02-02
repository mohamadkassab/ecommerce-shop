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
import { ITEMS_PER_PAGE, ROUTES } from "@/utils/constants";
import { useAppDispatch } from "@/utils/redux/hooks";
import { GetProductsByQuery, SetSearchQuery } from "@/utils/redux/actions/page";

interface CategoryProductsSectionModel{
 categoryProduct: CategoryProductModel;
 numberOfSlides: number;
}

const CategoryProductsSection = ({categoryProduct, numberOfSlides}: CategoryProductsSectionModel) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: numberOfSlides,
    slidesToScroll: numberOfSlides,
  };

  const handleViewMore = (categoryName: string)=>{
    dispatch(SetSearchQuery(categoryName));
    dispatch(GetProductsByQuery({
               query: categoryName,
               pageNbr: 1,
               pageSize: ITEMS_PER_PAGE,
             })
           );
    router.push(`${ROUTES.PRODUCTSSEARCH.path}`);
  }

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
            variant="outlined"
            onClick={() => {handleViewMore(categoryProduct?.categoryName);}}
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
              <div key={index} className="m-2 w-64 h-80 flex justify-center items-center">
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
