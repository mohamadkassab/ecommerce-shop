import {
  GetHomePageAssetsService,
  GetHomePageProductsAndBrandsService,
  GetProductsByCategoryAndPageService,
} from "@/services/pageService";
import { createAsyncThunk } from "@reduxjs/toolkit";

//+------------------------------------------------------------------+
//| Home
//+------------------------------------------------------------------+
export const GetHomePageProductsAndBrands = createAsyncThunk(
  "GetHomePageProductsAndBrands",
  async () => {
    const response = await GetHomePageProductsAndBrandsService();
    return response;
  }
);
export const GetHomePageAssets = createAsyncThunk(
  "GetHomePageAssets",
  async () => {
    const response = await GetHomePageAssetsService();
    return response;
  }
);

//+------------------------------------------------------------------+
//| Product Search
//+------------------------------------------------------------------+
export const GetProductsByCategoryAndPage = createAsyncThunk(
  "GetProductsByCategoryAndPage",
  async ({
    categoryId,
    pageNbr,
    pageSize,
  }: {
    categoryId: number;
    pageNbr: number;
    pageSize: number;
  }) => {
    const response = await GetProductsByCategoryAndPageService({
      categoryId: categoryId,
      pageNbr: pageNbr,
      pageSize: pageSize,
    });
    return response;
  }
);
