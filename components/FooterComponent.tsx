"use client";

import { Box, Container, Divider } from "@mui/material";
import { colorsDataSet } from "../app/data";

export default function FooterComponent() {
  return (
    <>
      <Divider />
      <Box
        sx={{
          minHeight: "30vh",
          background: colorsDataSet.footerBackground,
          py: 8,
          color: colorsDataSet.basicFont,
        }}
      >
        <Container maxWidth="lg">
          <p>s</p>
        </Container>
      </Box>
    </>
  );
}
