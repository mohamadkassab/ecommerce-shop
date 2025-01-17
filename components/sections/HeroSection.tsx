"use client";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { globalRadius } from "@/styles/muiTheme";

interface HeroSectionModel {
  backgroundImage: string; 
  ctaLink: string; 
} 

const HeroSection = ({
  backgroundImage,
  ctaLink,
}: HeroSectionModel) => {
  const theme = useTheme();
  return (
    <div
      className="relative flex items-end justify-center"
      style={{
        height: "calc(100vh - 144px)",
        backgroundImage:  `url(data:image/jpeg;base64,${backgroundImage})`,
        backgroundSize: "cover",
        backgroundColor: `${theme.palette.background.default}`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: globalRadius,
        overflow: "hidden",
        
      }}
    >
      <div
        className="z-10 max-w-3xl px-6 w-full pb-4 md:pb-14" 
        style={{ textAlign: "center" }}
      >
        <Button
          href={ctaLink}
          variant="contained"
          sx={{
            px: 2,
            py: 1, 
            backgroundColor: (theme) => theme.palette.primary.main,
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.primary.dark,
            },
          }}
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
