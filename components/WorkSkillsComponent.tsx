"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";

import { colorsDataSet, workSkillsDataSet } from "../app/data";

export default function WorkSkillsComponent() {
  return (
    <Box sx={{ mb: 10 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Naše služby
      </Typography>
      <Grid container spacing={4}>
        <Grid container spacing={2} sx={{ textAlign: "center", mb: 4 }}>
          {workSkillsDataSet.map((item, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card sx={{ minHeight: 350 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/brilzW.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: colorsDataSet.primaryFont }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
