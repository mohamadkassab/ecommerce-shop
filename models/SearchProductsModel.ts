import { FilterSortOptionsModel } from "./FilterSortOptionsModel";
import { SelectedFilterSortModel } from "./SelectedFilterSortModel";
import { ShopProductModel } from "./ShopProductModel";

export interface SearchProductsModel {
    totalProducts: Number, 
    products: ShopProductModel[],
    filterSort: FilterSortOptionsModel,
    selectedFilterSort: SelectedFilterSortModel
}
    