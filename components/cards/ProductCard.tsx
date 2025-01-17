import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { globalRadius } from "@/styles/muiTheme";
import { Box } from "@mui/material";
import { ShopProductModel } from "@/models/ShopProductModel";
import adidas from "@/public/images/adidas.png"

interface ProductCardModel{
  product: ShopProductModel;
}

const ProductCard = ({product}: ProductCardModel)=> {
 
  return (
    <div className="flex-shrink-0">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.media ? `data:image/jpeg;base64,${product.media}` : "/images/product.jpeg"}
            alt={product?.name}
            sx={{ borderRadius: globalRadius, }}
          />
          <CardContent sx={{paddingY: 0}}>
            <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 1, 
            }}>
              {product?.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 2, 
                lineHeight: '1.5em', // Adjust line height for better control
                height: '3em', // This ensures the element takes exactly two lines of space
              }}
            >
              {product?.shortDescription}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                columnGap: "1rem",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "secondary.dark" }}
              >
             {`$${(product?.price * (1 - product?.discount / 100)).toFixed(2)}`}
              </Typography>
              
              <Typography
                variant="subtitle1"
                sx={{ textDecoration: "line-through", color: "error.main" }}
              >
                {`$${product?.price}`}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ProductCard;
