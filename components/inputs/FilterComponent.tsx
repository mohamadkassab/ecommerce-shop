import React, { useState } from "react";
import {
  Box,
  Chip,
  Button,
  Modal,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { GetUniqueValues } from "@/utils/helpers/functions";
import { SearchProductsModel } from "@/models/SearchProductsModel";

interface FilterModalModel {
  searchProductsOriginal: SearchProductsModel;
  setSearchProductsFiltered: any;
}

interface FilterModel {
  filterGroup: string;
  values: string[];
  selectedValues?: string[];
}

const FilterModal = ({
  setSearchProductsFiltered,
  searchProductsOriginal,
}: FilterModalModel) => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const sortingOptions: string[] = ["Price: Low to High", "Price: High to Low"];
  const [sortingOption, setSortingOption] = useState("");

  const [filters, setFilters] = React.useState<FilterModel[]>([]);

  const handleSortingClick = (item: string) => {
    setSortingOption(item);
  };
  const handleSortingDelete = () => {
    setSortingOption("");
    setSearchProductsFiltered(searchProductsOriginal?.products);
  };

  const handleFilterClick = (filterGroup: string, value: string) =>{
    const updatedFilters = filters?.map((item)=>{
      if(item.filterGroup === filterGroup){
        const selectedValues = item.selectedValues || [];
        if(!item.selectedValues?.includes(value)){
          return{
            ...item,
            selectedValues: [...selectedValues, value],
          }
        }
      }
      return item;
    })
    setFilters(updatedFilters);
  }

  const handleFilterDelete = (filterGroup: string, value: string) =>{
    const updatedFilters = filters?.map((item)=>{
      if(item.filterGroup === filterGroup){
        const updatedSelectedValues = item.selectedValues?.filter((selectedValue) => selectedValue !== value);
          return{
            ...item,
            selectedValues: [...updatedSelectedValues || []],
          }
      }
      return item;
    })
    setFilters(updatedFilters);
  }

  // Dynamic component
  const sortAndFilter = () =>{
    if(searchProductsOriginal?.products?.length > 0){

      let newSortedFilteredProducts ;
      if (sortingOption === sortingOptions[0]) {
        newSortedFilteredProducts = [...searchProductsOriginal?.products]?.sort(
          (a, b) => a.price - b.price
        );
      } else if (sortingOption === sortingOptions[1]) {
        newSortedFilteredProducts = [...searchProductsOriginal?.products]?.sort(
          (a, b) => b.price - a.price
        );
      }else{
        newSortedFilteredProducts = searchProductsOriginal?.products
      }

      const filteredProducts = newSortedFilteredProducts?.filter(product => {
        const brandSortingOptions = filters.find(i =>i.filterGroup === "Brands")
        const isBrand = (
          !brandSortingOptions?.selectedValues || 
          brandSortingOptions?.selectedValues?.length === 0 || 
          brandSortingOptions?.selectedValues?.includes(product.brand));
          
        const categorySortingOptions = filters.find(i =>i.filterGroup === "Categories")
        const isCategory = (
          !categorySortingOptions?.selectedValues || 
          categorySortingOptions?.selectedValues?.length === 0 ||
          product?.categories?.some(category => categorySortingOptions?.selectedValues?.includes(category))
        );   
        return isBrand && isCategory;
      });

      setSearchProductsFiltered(filteredProducts);
    }
  }

  React.useEffect(() => {
    const uniqueCategories = GetUniqueValues(searchProductsOriginal?.products,"categories");
    const uniqueBrands = GetUniqueValues(searchProductsOriginal?.products, "brand");
    const updatedFilters = [
      { filterGroup: "Categories", values: uniqueCategories },
      { filterGroup: "Brands", values: uniqueBrands },
    ];
    setFilters(updatedFilters);
  }, [searchProductsOriginal]);

  React.useEffect(()=>{
    sortAndFilter();
  },[filters, sortingOption])

  return (
    <>
      <Button onClick={handleModalOpen} variant="contained">
        Sort and Filter
      </Button>

      <Modal
        open={open}
        onClose={handleModalClose}
        sx={{ backdropFilter: "blur(4px)", transition: "all 0.3s ease-in-out" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
            borderRadius: 3,
            px: 4,
            pb: 4,
            maxHeight: "90vh",
            width: {
              xs: "90vw",
              md: "600px",
            },
            transition: "all 0.3s ease-in-out",
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "sticky",
              top: 0,
              bgcolor: "background.paper",
              zIndex: 100,
              paddingY: "1rem",
            }}
          >
            <Typography variant="h5" component="h2">
              Sort and Filter
            </Typography>
            <IconButton onClick={handleModalClose} sx={{ p: 0 }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <div className="flex flex-col gap-y-4">
            <div>
              <Typography variant="h6" component="h2" color="secondary">
                Sort By
              </Typography>
              <Divider />
              <div className="mt-2 flex gap-x-2 flex-wrap">


                {sortingOptions.map((item) => {
                  if (item === sortingOption) {
                    return(
                      <Chip
                      key={item}
                      label={`${item}`}
                      color="primary"
                      onDelete={() => handleSortingDelete()}
                    />
                    )
                  }
                  return (
                    <Chip
                      key={item}
                      label={`${item}`}
                      color="secondary"
                      onClick={() => handleSortingClick(item)}
                    />
                  );
                })}
              </div>
            </div>

            <div>
              <Typography variant="h6" component="h2" color="secondary">
                Filter By
              </Typography>
              <Divider />
              <div className="mt-2 flex flex-col gap-x-2 flex-wrap">
                {filters?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Typography
                        variant="body1"
                        component="h2"
                        color="secondary"
                      >
                        {item?.filterGroup}
                      </Typography>
                      <div className="flex gap-x-2 flex-wrap">
                        {item?.values?.map((value, index) => {
                          if (
                            item?.selectedValues?.find((sv) => sv === value)
                          ) {
                            return (
                              <Chip
                                key={index}
                                label={`${value}`}
                                color="primary"
                                onDelete={() => handleFilterDelete(item?.filterGroup, value)}
                              />
                            );
                          } else {
                            return (
                              <Chip
                                key={index}
                                label={`${value}`}
                                color="secondary"
                                onClick={() => handleFilterClick(item?.filterGroup, value)}
                              />
                            );
                          }
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default FilterModal;
