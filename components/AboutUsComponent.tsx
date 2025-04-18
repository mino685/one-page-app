"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { aboutUsDataSet, colorsDataSet } from "../app/data";
import { RefObject } from "react";

export default function AboutUsComponent({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Box ref={sectionRef} sx={{ mb: 10 }}>
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
          <Grid size={{ xs: 12, md: index % 2 === 0 ? 8 : 4 }}>
            <CardMedia
              sx={{ height: 250, borderRadius: 2 }}
              image="/brilzW.jpg"
              title="green iguana"
            />
          </Grid>
          <Grid size={{ xs: 12, md: index % 2 === 0 ? 4 : 8 }}>
            <CardMedia
              sx={{ height: 250, borderRadius: 2 }}
              image="/brilzH.jpg"
              title="green iguana"
            />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
