// src/slices/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { ActionReducerMapBuilder, AsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { StatusModel } from '@/models/StatusModel';
import { isErrorPayload } from '../helpers/functions';
import { CategoryProductModel } from '@/models/CategoryProductModel';
import { getHomePageAssets, getHomePageProductsAndBrands } from './actions/page';
import { PageAssetsModel } from '@/models/PageAssetsModel';
import { ProductAndBrandModel } from '@/models/ProductAndBrandModel';

interface InitialState {
  homePageProductsAndBrands?: ProductAndBrandModel;
  homePageAssets?: PageAssetsModel;
  status: StatusModel;
  error: string | null | object;
}

const initialState: InitialState = {
  status: StatusModel.IDLE,
  error: null,
};

//+------------------------------------------------------------------+
//| Utility to handle common async action states (pending, fulfilled, rejected)                                          
//+------------------------------------------------------------------+
const handleAsyncAction = <T>(
  builder: ActionReducerMapBuilder<InitialState>, 
  action: AsyncThunk<T, any, {}>, 
  onSuccess: (state: InitialState, action: PayloadAction<T>) => void
) => {
  builder
    .addCase(action.pending, (state) => {
      state.status = StatusModel.LOADING;
      state.error = null;
    })
    .addCase(action.fulfilled, (state, action) => {
      onSuccess(state, action);
      if (isErrorPayload(action.payload)) {
        state.error = action.payload?.error?.response?.data?.message || "Failed";
        state.status = StatusModel.FAILED;
      }else{
        state.status = StatusModel.SUCCESS;
      }
    })
    .addCase(action.rejected, (state, action) => {
      state.error = action.error?.message || null;
      state.status = StatusModel.FAILED;
    });
};

const handleAsyncActionWithoutSuccess = <T>(
  builder: ActionReducerMapBuilder<InitialState>, 
  action: AsyncThunk<T, any, {}>, 
  onSuccess: (state: InitialState, action: PayloadAction<T>) => void
) => {
  builder
    .addCase(action.pending, (state) => {
      state.status = StatusModel.LOADING;
      state.error = null;
    })
    .addCase(action.fulfilled, (state, action) => {
      onSuccess(state, action);
      if (isErrorPayload(action.payload)) {
        state.error = action.payload?.error?.response?.data?.message || "Failed";
        state.status = StatusModel.FAILED;
      }else{
        state.status = StatusModel.OK;
      }
    })
    .addCase(action.rejected, (state, action) => {
      state.error = action.error?.message || null;
      state.status = StatusModel.FAILED;
    });
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

    //+------------------------------------------------------------------+
    //| Home                                            
    //+------------------------------------------------------------------+
    handleAsyncActionWithoutSuccess(builder, getHomePageAssets, (state, action) => {
      if (!action.payload.error) {
        state.homePageAssets = action.payload || [];
      }       
    });
    handleAsyncActionWithoutSuccess(builder, getHomePageProductsAndBrands, (state, action) => {
      if (!action.payload.error) {
        state.homePageProductsAndBrands = action.payload || [];
      }       
    });

  },
});

export default slice.reducer;
