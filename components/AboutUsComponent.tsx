"use client";

import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { aboutUsDataSet, colorsDataSet } from "../app/data";
import { RefObject } from "react";

export default function AboutUsComponent({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Box sx={{ pt: 10 }} ref={sectionRef}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        O nás
      </Typography>
      {aboutUsDataSet.map((item, index) => (
        <Grid
          container
          spacing={2}
          key={index}
          sx={{ textAlign: "center", mb: 4 }}
        >
          <Box
            sx={{
              ml: { xs: 2, sm: 0 },
              mr: { xs: 2, sm: 0 },
            }}
          >
            <Grid size={12}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: colorsDataSet.primaryFont }}
              >
                {item.title}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography component="span">{item.desc}</Typography>
            </Grid>
          </Box>
          <Grid size={{ xs: 12, md: index % 2 === 0 ? 8 : 4 }}>
            <CardMedia
              sx={{ height: 250, borderRadius: { xs: 0, sm: 2 } }}
              image={item.imageWidth}
              title="green iguana"
            />
          </Grid>
          <Grid size={{ xs: 12, md: index % 2 === 0 ? 4 : 8 }}>
            <CardMedia
              sx={{
                height: 250,
                borderRadius: 2,
                display: { xs: "none", sm: "flex" },
              }}
              image={item.imageHeight}
              title="green iguana"
            />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
