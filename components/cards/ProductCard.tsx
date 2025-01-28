import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { GLOBALRADIUS } from "@/styles/muiTheme";
import { Box, CardActions } from "@mui/material";
import { ShopProductModel } from "@/models/ShopProductModel";

interface ProductCardModel {
  product: ShopProductModel;
  addToCart?: boolean;
}

const ProductCard = ({ product, addToCart }: ProductCardModel) => {
  return (
    <div className="flex-shrink-0">
      <Card
        sx={{
          maxWidth: { xs: "200px", sm: "250px", md: "300px" },
          paddingX: { xs: 1, sm: 2 },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={
              product?.media
                ? `data:image/jpeg;base64,${product?.media}`
                : "/images/product.jpeg"
            }
            alt={product?.name}
            sx={{
              borderRadius: GLOBALRADIUS,
              overflow: "hidden",
              objectFit: "contain",
              height: { xs: "150px", sm: "200px", md: "250px" },
              width: { xs: "150px", sm: "200px", md: "250px" },
              flexShrink: 0,
            }}
          />
          <CardContent sx={{ padding: 0, paddingX: "10px" }}>
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
              }}
            >
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
                lineHeight: "1.5em",
                height: "3em",
              }}
            >
              {product?.shortDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className="flex w-full justify-between items-center pl-[5px]">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "0.5rem",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "secondary.dark" }}
              >
                {`$${(product?.price * (1 - product?.discount / 100)).toFixed(
                  2
                )}`}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ textDecoration: "line-through", color: "error.main" }}
              >
                {`$${product?.price}`}
              </Typography>
            </Box>

            {addToCart && (
              <IconButton
                color="primary"
                aria-label="add to cart"
                onClick={() => console.log(`Added ${product?.name} to cart`)}
                sx={{
                  backgroundColor: "accent.main",
                  color: "accent.contrastText",
                  borderRadius: GLOBALRADIUS,
                  padding: "4px", 
                  "&:hover": {
                    backgroundColor: "accent.dark",
                  },
                }}
              >
                <ShoppingCartCheckoutIcon />
              </IconButton>
            )}
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
