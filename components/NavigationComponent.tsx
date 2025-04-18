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
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import {
  colorsDataSet,
  mainInformationDataSet,
  navigationItemsDataSet,
} from "../app/data";

interface Props {
  scrollToContact?: () => void;
  scrollToAboutUs?: () => void;
  scrollToWorkSkills?: () => void;
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { window, children } = props;

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
  const { scrollToContact, scrollToAboutUs, scrollToWorkSkills, window } =
    props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = [scrollToAboutUs, scrollToWorkSkills, scrollToContact];
  const drawerWidth = 240;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const socialIcons = (
    <>
      <IconButton size="large" aria-label="Instagram" color="inherit">
        <Instagram />
      </IconButton>
      <IconButton size="large" aria-label="Facebook" color="inherit">
        <FacebookOutlined />
      </IconButton>
      <IconButton size="large" aria-label="Facebook" color="inherit">
        <Twitter />
      </IconButton>
      <IconButton size="large" aria-label="Facebook" color="inherit">
        <WhatsApp />
      </IconButton>
      <IconButton size="large" aria-label="Facebook" color="inherit">
        <YouTube />
      </IconButton>
    </>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {mainInformationDataSet.companyName}
      </Typography>
      <Divider sx={{ backgroundColor: "gray" }} />
      <List>
        {navigationItemsDataSet.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={scrollTo[index]}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "gray" }} />
      <Box sx={{ display: { xs: "flex", alignItems: "center" } }}>
        {socialIcons}
      </Box>
    </Box>
  );

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
              sx={{ flexGrow: 1, display: { xs: "block" } }}
            >
              {mainInformationDataSet.companyName}
            </Typography>
            <Box sx={{ display: { xs: "none" } }}>
              {navigationItemsDataSet.map((item, index) => (
                <Button
                  key={index}
                  sx={{ color: colorsDataSet.navbarItems }}
                  onClick={scrollTo[index]}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {socialIcons}
            </Box>
            <Box sx={{ display: { sm: "block" } }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { sm: "block" } }}
              >
                <Phone sx={{ color: "green" }} />{" "}
                {mainInformationDataSet.contactPhone}
              </Typography>
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
