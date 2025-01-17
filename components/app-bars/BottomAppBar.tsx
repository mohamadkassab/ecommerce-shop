"use client";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import HomeIcon from "@mui/icons-material/Home";
import { Badge } from "@mui/material";

export default function BottomAppBar() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div
      className="sm:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Ensure it stays above other content
        backgroundColor: "white", // Prevent transparency issues
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
      }}
    >
      <BottomNavigation
        sx={{ width: "100%" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Categories"
          value="Categories"
          icon={<WidgetsIcon />}
        />
        <BottomNavigationAction
          label="Cart"
          value="Cart"
          icon={
            <Badge color="primary" variant="dot" invisible={false}>
              <LocalMallIcon fontSize="small" />
            </Badge>
          }
        />
        <BottomNavigationAction
          label="Account"
          value="Account"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
