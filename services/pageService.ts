import { APIROUTES } from "@/utils/constants";
import { apiRequest } from "@/utils/helpers/apiRequest";

//+------------------------------------------------------------------+
//| Home
//+------------------------------------------------------------------+
export const GetHomePageProductsAndBrandsService = async () =>
  apiRequest("GET", APIROUTES.GETHOMEPAGEPRODUCTSANDBRANDS);
export const GetHomePageAssetsService = async () =>
  apiRequest("GET", APIROUTES.GETHOMEPAGEASSETS);

//+------------------------------------------------------------------+
//| Product Search
//+------------------------------------------------------------------+
export const GetProductsByCategoryAndPageService = async ({
  categoryId,
  pageNbr,
  pageSize,
}: {
  categoryId: number;
  pageNbr: number;
  pageSize: number;
}) => {
  const params = `${categoryId}/${pageNbr}/${pageSize}`;
  return await apiRequest(
    "GET",
    APIROUTES.GETPRODUCTSBYCATEGORYANDPAGE,
    null,
    params
  );
};
