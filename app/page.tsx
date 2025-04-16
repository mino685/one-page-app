"use client";

import { Box, Container, CssBaseline, Divider } from "@mui/material";
import Head from "next/head";
import { colorsDataSet, mainInformationDataSet } from "./data";
import NavigationComponent from "../components/NavigationComponent";
import MainInformationComponent from "../components/MainInformationComponent";
import AboutUsComponent from "../components/AboutUsComponent";
import WorkSkillsComponent from "../components/WorkSkillsComponent";
import ContactComponent from "../components/ContactComponent";
import FooterComponent from "../components/FooterComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>{mainInformationDataSet.productName}</title>
        <meta
          name="description"
          content="Webové aplikácie, dashboardy a firemné riešenia."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <NavigationComponent />
      <Box
        sx={{
          minHeight: "100vh",
          background: colorsDataSet.pageBackground,
          py: 8,
          color: colorsDataSet.basicFont,
        }}
      >
        <Container maxWidth="lg">
          <MainInformationComponent />
          <AboutUsComponent />
          <WorkSkillsComponent />
          <ContactComponent />
        </Container>
      </Box>
      <FooterComponent />
    </>
  );
}
