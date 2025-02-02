"use client";
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
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { GetProductsByQuery } from "@/utils/redux/actions/page";

const FilterModal = () => {
  const dispatch = useAppDispatch();
  const { searchProducts, status, searchQuery } = useAppSelector((state: any) => state.reducer);
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const [filters, setFilters] = React.useState<FilterSortModel>({
    sortingOption: "",
    brands: [],
    categories: [],
  });

  const handleResetFilter = () => {
    dispatch(
      GetProductsByQuery({
        query: searchQuery,
        pageNbr: 1,
        pageSize: ITEMS_PER_PAGE,
      })
    );
  };
  const handleApplyFilter = () =>{
    dispatch(
      GetProductsByQuery({
        query: searchQuery,
        pageNbr: 1,
        pageSize: ITEMS_PER_PAGE,
        sortingOption: filters.sortingOption,
        brands: filters.brands,
        categories: filters.categories,
      })
    );
  };
  const handleSortingClick = (item: string) => {
    setFilters((current) =>({
      ...current,
      sortingOption: item,
    }))
  };
  const handleSortingDelete = () => {
    setFilters((current) =>({
      ...current,
      sortingOption: "",
    }))
  };
  const handleFilterClick = (key: keyof FilterSortModel, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: prevFilters[key] ? [...prevFilters[key], value] : [value],
    }));
  };
  const handleFilterDelete = (key: keyof FilterSortModel, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: Array.isArray(prevFilters[key])
        ? prevFilters[key].filter((item) => item !== value)
        : prevFilters[key],
    }));
  };

  React.useEffect(() => {
    setFilters({
      sortingOption: searchProducts?.selectedFilterSortOptions?.sortingOption,
      brands: searchProducts?.selectedFilterSortOptions?.brands,
      categories: searchProducts?.selectedFilterSortOptions?.categories,
    });
  }, [searchProducts]);

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
          <div className="w-full flex justify-end pt-4">
            <div className="flex gap-x-4">
            <Button onClick={handleApplyFilter} variant="contained" color="primary">
                Apply
              </Button>

              <Button onClick={handleResetFilter} variant="contained" color="secondary">
                Reset
              </Button>

              <IconButton onClick={handleModalClose} sx={{ p: 0 }}>
                <CloseIcon />
              </IconButton>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div>
              <div className="w-full flex justify-between">
                <div className="flex items-center">
                  <Typography variant="h6" component="h2" color="secondary">
                    Sort By
                  </Typography>
                </div>
              </div>
              <Divider />
              <div className="mt-2 flex gap-x-2 flex-wrap">
                {searchProducts?.filterSortOptions?.sortingOptions?.map(
                  (sortingOptions: Record<string, string>) => {
                    const [sortingKey, sortingDescription] = Object.entries(sortingOptions)[0];
                    if (
                      sortingKey ===
                      filters?.sortingOption
                    ) {
                      return (
                        <Chip
                          key={sortingKey}
                          label={`${sortingDescription}`}
                          color="primary"
                          onDelete={() => handleSortingDelete()}
                        />
                      );
                    }
                    return (
                      <Chip
                        key={sortingKey}
                        label={`${sortingDescription}`}
                        color="secondary"
                        onClick={() => handleSortingClick(sortingKey)}
                      />
                    );
                  }
                )}
              </div>
            </div>

            <div>
              <Typography variant="h6" component="h2" color="secondary">
                Filter By
              </Typography>
              <Divider />

              <div className="mt-2 flex flex-col gap-x-2 gap-y-2 flex-wrap">
                {/* Brands */}
                <div>
                  <Typography variant="body1" component="h2" color="secondary">
                    {`Brands`}
                  </Typography>
                  <div className="flex gap-x-2 flex-wrap">
                    {searchProducts?.filterSortOptions?.brands?.map(
                      (brand: string, index: number) => {
                        if (
                          filters?.brands?.find(
                            (v: string) => v === brand
                          )
                        ) {
                          return (
                            <Chip
                              key={index}
                              label={`${brand}`}
                              color="primary"
                              onDelete={() =>
                                handleFilterDelete(
                                  "brands" as keyof FilterSortModel,
                                  brand
                                )
                              }
                            />
                          );
                        } else {
                          return (
                            <Chip
                              key={index}
                              label={`${brand}`}
                              color="secondary"
                              onClick={() =>
                                handleFilterClick(
                                  "brands" as keyof FilterSortModel,
                                  brand
                                )
                              }
                            />
                          );
                        }
                      }
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <Typography variant="body1" component="h2" color="secondary">
                    {`Categories`}
                  </Typography>
                  <div className="flex gap-x-2 flex-wrap">
                    {searchProducts?.filterSortOptions?.categories?.map(
                      (category: string, index: number) => {
                        if (
                          filters?.categories?.find(
                            (v: string) => v === category
                          )
                        ) {
                          return (
                            <Chip
                              key={index}
                              label={`${category}`}
                              color="primary"
                              onDelete={() =>
                                handleFilterDelete(
                                  "categories" as keyof FilterSortModel,
                                  category
                                )
                              }
                            />
                          );
                        } else {
                          return (
                            <Chip
                              key={index}
                              label={`${category}`}
                              color="secondary"
                              onClick={() =>
                                handleFilterClick(
                                  "categories" as keyof FilterSortModel,
                                  category
                                )
                              }
                            />
                          );
                        }
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default FilterModal;
