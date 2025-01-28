import { APIROUTES } from "@/utils/constants";
import { ApiRequest } from "@/utils/helpers/apiRequest";

//+------------------------------------------------------------------+
//| Home
//+------------------------------------------------------------------+
export const GetHomePageProductsAndBrandsService = async () =>
  ApiRequest("GET", APIROUTES.GETHOMEPAGEPRODUCTSANDBRANDS);
export const GetHomePageAssetsService = async () =>
  ApiRequest("GET", APIROUTES.GETHOMEPAGEASSETS);

//+------------------------------------------------------------------+
//| Product Search
//+------------------------------------------------------------------+
export const GetProductsByQueryService = async ({
  query,
  pageNbr,
  pageSize,
}: {
  query: string;
  pageNbr: number;
  pageSize: number;
}) => {
  const params = `${query}/${pageNbr}/${pageSize}`;
  return await ApiRequest(
    "GET",
    APIROUTES.GETPRODUCTSBYQUERY,
    null,
    params
  );
};
