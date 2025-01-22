import React, { useState } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Chip,
  Button,
  Modal,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Define the types for filters
interface Filters {
  priceRange: {
    low: string;
    high: string;
  };
  brand: string[];
  category: string[];
}

const FilterModal: React.FC = () => {
  // State for filters
  const [filters, setFilters] = useState<Filters>({
    priceRange: { low: "", high: "" },
    brand: [],
    category: [],
  });

  // Filter options
  const brands: string[] = ["Nike", "Adidas", "Puma", "Under Armour"];
  const categories: string[] = ["Shoes", "Clothing", "Accessories"];

  // Handlers
  const handlePriceChange = (field: "low" | "high", value: string) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, [field]: value },
    }));
  };

  const handleCheckboxChange = (key: "brand" | "category", value: string) => {
    if (value === "ALL") {
      const allSelected =
        filters[key].length ===
        (key === "brand" ? brands.length : categories.length);
      setFilters((prev) => ({
        ...prev,
        [key]: allSelected
          ? []
          : key === "brand"
          ? [...brands]
          : [...categories],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [key]: prev[key as "brand" | "category"].includes(value)
          ? prev[key].filter((item) => item !== value)
          : [...prev[key], value],
      }));
    }
  };

  const handleClearFilter = (
    key: "priceRange" | "brand" | "category",
    value?: string
  ) => {
    if (key === "priceRange") {
      setFilters((prev) => ({ ...prev, priceRange: { low: "", high: "" } }));
    } else if (value) {
      setFilters((prev) => ({
        ...prev,
        [key]: prev[key as "brand" | "category"].filter(
          (item) => item !== value
        ),
      }));
    }
  };

  const clearAllFilters = () => {
    setFilters({
      priceRange: { low: "", high: "" },
      brand: [],
      category: [],
    });
  };

  const isFilterActive =
    filters.priceRange.low ||
    filters.priceRange.high ||
    filters.brand.length > 0 ||
    filters.category.length > 0;

  const [open, setOpen] = useState(false);

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleModalOpen} variant="contained">
        Filter
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
              paddingY: "1rem"
            }}
          >
            <Typography variant="h6" component="h2">
              Filter
            </Typography>
            <IconButton onClick={handleModalClose} sx={{ p: 0 }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Price Range */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <TextField
              label="Low Price"
              type="number"
              value={filters.priceRange.low}
              onChange={(e) => handlePriceChange("low", e.target.value)}
              fullWidth
            />
            <TextField
              label="High Price"
              type="number"
              value={filters.priceRange.high}
              onChange={(e) => handlePriceChange("high", e.target.value)}
              fullWidth
            />
          </Box>

          {/* Brand Filter */}
          <Box sx={{ mb: 3 }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.brand.length === brands.length}
                    onChange={() => handleCheckboxChange("brand", "ALL")}
                  />
                }
                label="All Brands"
              />
              {brands.map((brand) => (
                <FormControlLabel
                  key={brand}
                  control={
                    <Checkbox
                      checked={filters.brand.includes(brand)}
                      onChange={() => handleCheckboxChange("brand", brand)}
                    />
                  }
                  label={brand}
                />
              ))}
            </FormGroup>
          </Box>

          {/* Category Filter */}
          <Box sx={{ mb: 3 }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.category.length === categories.length}
                    onChange={() => handleCheckboxChange("category", "ALL")}
                  />
                }
                label="All Categories"
              />
              {categories.map((category) => (
                <FormControlLabel
                  key={category}
                  control={
                    <Checkbox
                      checked={filters.category.includes(category)}
                      onChange={() =>
                        handleCheckboxChange("category", category)
                      }
                    />
                  }
                  label={category}
                />
              ))}
            </FormGroup>
          </Box>

          {/* Active Filters Display */}
          <Box sx={{ mt: 3 }}>
            {isFilterActive ? (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {/* Price Range */}
                {(filters.priceRange.low || filters.priceRange.high) && (
                  <Chip
                    label={`Price: ${filters.priceRange.low || "0"} - ${
                      filters.priceRange.high || "∞"
                    }`}
                    onDelete={() => handleClearFilter("priceRange")}
                    color="primary"
                  />
                )}
                {/* Brand Filters */}
                {filters.brand.map((brand) => (
                  <Chip
                    key={brand}
                    label={`Brand: ${brand}`}
                    onDelete={() => handleClearFilter("brand", brand)}
                    color="secondary"
                  />
                ))}
                {/* Category Filters */}
                {filters.category.map((category) => (
                  <Chip
                    key={category}
                    label={`Category: ${category}`}
                    onDelete={() => handleClearFilter("category", category)}
                    color="success"
                  />
                ))}
              </Box>
            ) : (
              <Box>No filters applied</Box>
            )}
          </Box>

          {/* Clear All Button */}
          {isFilterActive && (
            <Button
              variant="outlined"
              color="error"
              onClick={clearAllFilters}
              sx={{ mt: 2 }}
            >
              Clear All Filters
            </Button>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default FilterModal;
