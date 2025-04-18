"use client";

import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { colorsDataSet } from "../app/data";

export default function ContactComponent({ sectionRef }: { sectionRef: any }) {
  const form = useRef<HTMLFormElement>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log("CR: ", sectionRef);

  return (
    <>
      <Box
        ref={sectionRef}
        textAlign="center"
        sx={{ ml: { xs: 2, sm: 0 }, mr: { xs: 2, sm: 0 } }}
      >
        <Typography variant="h4" gutterBottom>
          Kontaktujte nás
        </Typography>
        <Typography sx={{ mb: 4 }}>
          Vyplňte formulár a odpovieme vám do 24 hodín.
        </Typography>

        <Box
          component="form"
          ref={form}
          onSubmit={sendEmail}
          sx={{
            maxWidth: 500,
            mx: "auto",
            textAlign: "left",
            backgroundColor: "#ffffff",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <TextField
            label="Vaše meno"
            name="user_name"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Váš email"
            name="user_email"
            type="email"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Vaša správa"
            name="message"
            fullWidth
            multiline
            rows={8}
            required
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: colorsDataSet.mainButton,
              ":hover": { backgroundColor: colorsDataSet.mainButtonHover },
            }}
            fullWidth
          >
            Odoslať správu
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Správa bola úspešne odoslaná!
        </Alert>
      </Snackbar>
    </>
  );
}
