import { APIROUTES } from "@/utils/constants";
import { ApiRequestSearchParams } from "@/utils/helpers/apiRequest";

//+------------------------------------------------------------------+
//| Home
//+------------------------------------------------------------------+
export const GetHomePageProductsAndBrandsService = async () =>
  ApiRequestSearchParams("GET", APIROUTES.GETHOMEPAGEPRODUCTSANDBRANDS);
export const GetHomePageAssetsService = async () =>
  ApiRequestSearchParams("GET", APIROUTES.GETHOMEPAGEASSETS);

//+------------------------------------------------------------------+
//| Product Search
//+------------------------------------------------------------------+
export const GetProductsByQueryService = async ({
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

  const params = new URLSearchParams({
    Query: query,
    PageNbr: pageNbr.toString(),
    PageSize: pageSize.toString(), 
    SortingOption: sortingOption || "",
  });

  if(brands && brands?.length > 0){
    brands.forEach(option => params.append("Brands", option));
  }
  if(categories && categories?.length > 0){
    categories.forEach(option => params.append("Categories", option));
  }
  
  return await ApiRequestSearchParams(
    "GET",
    APIROUTES.GETPRODUCTSBYQUERY,
    null,
    params
  );
};
