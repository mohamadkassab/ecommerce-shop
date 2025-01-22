import { Box, CardActionArea, CardMedia } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrandModel } from "@/models/BrandModel";
import { Margin } from "@mui/icons-material";
import { GLOBALRADIUS } from "@/styles/muiTheme";

interface BrandSectionModel {
  brands: BrandModel[];
  numberOfSlides: number;
}

const BrandSection = ({ brands, numberOfSlides }: BrandSectionModel) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: numberOfSlides + 1,
    slidesToScroll: numberOfSlides + 1,
  };

  const handleBrandClick = (brand: BrandModel) => {
    console.log("Clicked brand:", brand.name);
  };

  return (
    <div className="flex flex-col">
      <Slider {...settings}>
        {brands?.map((item, index) => (
          <CardActionArea
            key={index}
            onClick={() => handleBrandClick(item)}
            sx={{
              maxWidth: "80px",
              borderRadius: GLOBALRADIUS,
              padding: {sm: "1rem"},
            }}
          >
            <CardMedia
              sx={{
                objectFit: "contain",
                height: "40px",
                maxWidth: "80px",
                flexShrink: 0,
              }}
              component="img"
              image={`data:image/jpeg;base64,${item?.media}`}
            />
          </CardActionArea>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSection;
