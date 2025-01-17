import { APIROUTES } from '@/utils/constants';
import {apiRequest} from '@/utils/helpers/apiRequest';

//+------------------------------------------------------------------+
//| Page                                           
//+------------------------------------------------------------------+
export const getHomePageProductsAndBrandsService = async () =>
  apiRequest('GET', APIROUTES.GetHomePageProductsAndBrands);
export const getHomePageAssetsService = async () =>
  apiRequest('GET', APIROUTES.GETHOMEPAGEASSETS);