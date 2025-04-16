"use client";

import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import {
  Menu,
  Instagram,
  FacebookOutlined,
  Twitter,
  Phone,
} from "@mui/icons-material";
import {
  colorsDataSet,
  mainInformationDataSet,
  navigationItemsDataSet,
} from "../app/data";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function NavigationComponent(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {mainInformationDataSet.productName}
      </Typography>
      <Divider />
      <List>
        {navigationItemsDataSet.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const drawerWidth = 240;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <HideOnScroll>
        <AppBar
          component="nav"
          sx={{
            backgroundColor: colorsDataSet.headerBackground,
            color: colorsDataSet.navbarItems,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {mainInformationDataSet.productName}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navigationItemsDataSet.map((item) => (
                <Button key={item} sx={{ color: colorsDataSet.navbarItems }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Instagram />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <FacebookOutlined />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Twitter />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Phone /> {mainInformationDataSet.contactPhone}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: colorsDataSet.headerBackground,
              color: colorsDataSet.navbarItems,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
