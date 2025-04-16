"use client";

import { Box, Button, CardMedia, Skeleton, Typography } from "@mui/material";

import { colorsDataSet, mainInformationDataSet } from "../app/data";

export default function MainInformationComponent() {
  return (
    <Box textAlign="center" sx={{ mb: 10, mt: 4 }}>
      <CardMedia
        sx={{ height: 350, borderRadius: 4 }}
        image="/brilzW.jpg"
        title="green iguana"
      />
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
        onClick={() => console.log("KONTAKT")}
      >
        Kontaktujte nás
      </Button>
    </Box>
  );
}
