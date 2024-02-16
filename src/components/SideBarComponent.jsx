import React, { useState } from "react";
import "../../public/styles/links.css";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  Box,
  Snackbar,
  Alert,
  Button,
} from "@mui/material";
import {
  HomeOutlined,
  Inventory2Outlined,
  SettingsOutlined,
  DescriptionOutlined,
  MonetizationOnOutlined,
  CardTravelOutlined,
  TrendingUpOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function SideBarComponent() {
  const navigate = useNavigate();
  const navigateTo = (to) => {
    navigate(to);
  };
  const location = useLocation();
  const currentPage = location.pathname;
  console.log(currentPage);

  const sideBarComponent = [
    {
      title: "Dashboard",
      component: <HomeOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "My Profile",
      component: <Inventory2Outlined fontSize="medium" color="primary" />,
    },
    {
      title: "Order Summary",
      component: <CardTravelOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "E-Bids & E-Auctions",
      component: <PeopleAltOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Alerts & Reminders",
      component: <MonetizationOnOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Partner Feedback",
      component: <TrendingUpOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Branch Details",
      component: <DescriptionOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Testonomials",
      component: <SettingsOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Add New Company",
      component: <MonetizationOnOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Grievance Request",
      component: <PeopleAltOutlined fontSize="medium" color="primary" />,
    },
  ];
  const [selected, setSelected] = useState(0);
  const handlSelectedComponent = (event, index) => {
    setSelected(index);
  };
  return (
    <>
      <List>
        {sideBarComponent.map((comp, index) => (
          <ListItem disablePadding dense={true} key={index}>
            <Box width="100%">
              <ListItemButton

                selected={
                  index === selected &&
                  currentPage === "/" + comp.title.toLowerCase()
                }
                sx={{
                  mb: 3,
                  borderLeft: 0,
                  borderColor: "primary.main",
                  ml: 1,
                }}
              >
                <ListItemIcon>
                  <IconButton>{comp.component}</IconButton>
                </ListItemIcon>

                <ListItemText
                  primary={comp.title}
                  primaryTypographyProps={{
                    fontSize: "medium",
                    fontWeight: selected === index ? "bold" : "",
                    color: selected === index ? "primary.main" : "inherit",
                  }}
                />
              </ListItemButton>
            </Box>
          </ListItem>
        ))}
      </List>

    </>
  );

}
