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

export default function WorkSkillsComponent({
  sectionRef,
}: {
  sectionRef: any;
}) {
  return (
    <Box
      sx={{ pt: 10, ml: { xs: 2, sm: 0 }, mr: { xs: 2, sm: 0 } }}
      ref={sectionRef}
    >
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
                  image={item.image}
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
