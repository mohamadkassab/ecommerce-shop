"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { useMediaQuery, useTheme } from "@mui/material";
import { GetNumberOfSlides } from "@/utils/helpers/functions";

interface MediaProps {
  itemCount: number;
}

function Media({ itemCount }: MediaProps) {
  return (
    <div className="flex w-full overflow-hidden">
      {Array.from(new Array(itemCount)).map((_, index) => (
        <Box
          key={index}
          sx={{
            flex: "1 0 0",
            my: 2,
            "&:not(:last-child)": {
              marginRight: 2,
            },
            width: 180, // Set a fixed width for each product item
          }}
        >
          {/* Product Image */}
          <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
          <Box sx={{ pt: 1 }}>
            {/* Product Title */}
            <Skeleton width="80%" />
            {/* Product Price */}
            <Skeleton width="50%" />
          </Box>
          <Box sx={{ pt: 1 }}>
            {/* Product Rating or other details */}
            <Skeleton width="40%" />
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default function LoadingSkeletonProducts() {
  const numberOfSlides = GetNumberOfSlides();
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media itemCount={numberOfSlides} />
    </Box>
  );
}
