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
  }: {
    query: string;
    pageNbr: number;
    pageSize: number;
  }) => {
    const response = await GetProductsByQueryService({
      query: query,
      pageNbr: pageNbr,
      pageSize: pageSize,
    });
    return response;
  }
);

//+------------------------------------------------------------------+
//| Shared
//+------------------------------------------------------------------+
export const SetSearchValue = createAsyncThunk('SetSearchValue', async (value: string) => {
  return value;
});

export const SetCurrentPage = createAsyncThunk('SetCurrentPage', async (pageNbr: number) => {
  return pageNbr;
});
