"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { aboutUsDataSet, colorsDataSet } from "../app/data";

export default function AboutUsComponent() {
  return (
    <Box sx={{ mb: 10 }}>
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
            <Skeleton
              sx={{ height: 250, borderRadius: 2 }}
              animation="wave"
              variant="rectangular"
            />
          </Grid>
          <Grid size={{ xs: 12, md: index % 2 === 0 ? 4 : 8 }}>
            <Skeleton
              sx={{ height: 250, borderRadius: 2 }}
              animation="wave"
              variant="rectangular"
            />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
