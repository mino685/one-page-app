"use client";

import { Box, Button, CardMedia, Skeleton, Typography } from "@mui/material";

import { colorsDataSet, mainInformationDataSet } from "../app/data";
import { useRef } from "react";

export default function MainInformationComponent({
  scrollToContact,
}: {
  scrollToContact: () => void;
}) {
  return (
    <Box textAlign="center" sx={{ mt: { xs: 0, sm: 4 } }}>
      <CardMedia
        sx={{ height: { xs: 200, sm: 350 }, borderRadius: { xs: 0, sm: 4 } }}
        image="/brilzW.jpg"
        title="green iguana"
      />
      <Box
        sx={{
          ml: { xs: 2, sm: 0 },
          mr: { xs: 2, sm: 0 },
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mt: 2 }} gutterBottom>
          {mainInformationDataSet.productName}
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          {mainInformationDataSet.title}
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            pt: 3,
            pb: 3,
            pl: 6,
            pr: 6,
            backgroundColor: colorsDataSet.mainButton,
            ":hover": { backgroundColor: colorsDataSet.mainButtonHover },
          }}
          onClick={scrollToContact}
        >
          Kontaktujte nás
        </Button>
      </Box>
    </Box>
  );
}
