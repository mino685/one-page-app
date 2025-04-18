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
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const workSkillsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (finalRef: any) => {
    if (finalRef.current) {
      finalRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
      <NavigationComponent
        scrollToContact={() => scrollToSection(contactRef)}
        scrollToAboutUs={() => scrollToSection(aboutUsRef)}
        scrollToWorkSkills={() => scrollToSection(workSkillsRef)}
      />
      <Box
        sx={{
          minHeight: "100vh",
          background: colorsDataSet.pageBackground,
          py: 8,
          color: colorsDataSet.basicFont,
        }}
      >
        <Container maxWidth="lg">
          <MainInformationComponent
            scrollToContact={() => scrollToSection(contactRef)}
          />
          <AboutUsComponent sectionRef={aboutUsRef} />
          <WorkSkillsComponent sectionRef={workSkillsRef} />
          <ContactComponent sectionRef={contactRef} />
        </Container>
      </Box>
      <FooterComponent />
    </>
  );
}
