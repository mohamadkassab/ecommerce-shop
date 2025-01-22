"use client";
import LoadingSkeletonProducts from "@/components/common/LoadingSkeletonProducts";
import FooterSection from "@/components/sections/FooterSection";
import { StatusModel } from "@/models/StatusModel";
import { useAppSelector } from "@/utils/redux/hooks";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useAppDispatch } from "@/utils/redux/hooks";
import { GetProductsByCategoryAndPage } from "@/utils/redux/actions/page";
import ProductSection from "@/components/sections/ProductSection";
import FilterComponent from "@/components/inputs/FilterComponent";
import { GLOBALRADIUS } from "@/styles/muiTheme";

const sortingOptions = ["Option 1", "Option 2"];

const Page = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const numberOfSlides = isLg ? 6 : isMd ? 4 : isSm ? 3 : 2;
  const categoryId = searchParams.get("id");
  const categoryName = searchParams.get("name");
  const { productsSearch, status } = useAppSelector(
    (state: any) => state.reducer
  );
  const [pageNbr, setPageNbr] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(32);
  const [sortingOption, setSortingOption] = React.useState<string | null>(null);
  const [age, setAge] = React.useState("SortBy");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  React.useEffect(() => {
    dispatch(
      GetProductsByCategoryAndPage({
        categoryId: Number(categoryId),
        pageNbr: pageNbr,
        pageSize: pageSize,
      })
    );
  }, []);

  return (
    <div className="flex flex-col sm:px-[1rem] gap-y-[2rem] sm:gap-y-[4rem] min-h-screen sm:min-h-[calc(100vh-149px)]">
      {status != StatusModel.LOADING && (
        <div className="w-full flex justify-start mb-[-1rem] sm:mb-[-2rem]  sticky top-[60px] sm:top-[72px] bg-white z-[1000] pb-[1rem]">
          <div className="flex gap-x-[1rem] w-full justify-end">
            <FormControl sx={{ minWidth: 120, borderRadius: GLOBALRADIUS }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
                sx={{borderRadius: GLOBALRADIUS}}
              >
                <MenuItem value="SortBy">
                  <em>Sort By</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FilterComponent />
          </div>
        </div>
      )}

      {status === StatusModel.LOADING && (
        <LoadingSkeletonProducts itemCount={numberOfSlides} />
      )}

      {status != StatusModel.LOADING && (
        <ProductSection products={productsSearch} />
      )}

      <FooterSection />
    </div>
  );
};

export default Page;
