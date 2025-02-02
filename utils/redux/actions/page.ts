import {
  GetHomePageAssetsService,
  GetHomePageProductsAndBrandsService,
  GetProductsByQueryService,
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
export const GetProductsByQuery = createAsyncThunk(
  "GetProductsByQuery",
  async ({
    query,
    pageNbr,
    pageSize,
    sortingOption,
    brands,
    categories
  }: {
    query: string;
    pageNbr: number;
    pageSize: number;
    sortingOption?: string;
    brands?: string [];
    categories?: string [];
  }) => {
    const response = await GetProductsByQueryService({
      query: query,
      pageNbr: pageNbr,
      pageSize: pageSize,
      sortingOption,
      brands,
      categories
    });
    return response;
  }
);

//+------------------------------------------------------------------+
//| Shared
//+------------------------------------------------------------------+
export const SetSearchQuery = createAsyncThunk('SetSearchQuery', async (value: string) => {
  return value;
});

export const SetCurrentPage = createAsyncThunk('SetCurrentPage', async (pageNbr: number) => {
  return pageNbr;
});
