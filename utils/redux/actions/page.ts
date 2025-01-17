import { getHomePageAssetsService, getHomePageProductsAndBrandsService } from '@/services/pageService';
import { createAsyncThunk } from '@reduxjs/toolkit';

//+------------------------------------------------------------------+
//| Page                                           
//+------------------------------------------------------------------+
export const getHomePageProductsAndBrands = createAsyncThunk('getHomePageProductsAndBrands', async () => {
  const response = await getHomePageProductsAndBrandsService();
  return response;
});

export const getHomePageAssets = createAsyncThunk('getHomePageAssets', async () => {
  const response = await getHomePageAssetsService();
  return response;
});