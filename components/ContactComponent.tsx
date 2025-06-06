import { colorsDataSet } from "@/app/data";
import {
  Box,
  Typography,
  Snackbar,
  Alert,
  Button,
  TextField,
} from "@mui/material";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactComponent({ sectionRef }: { sectionRef: any }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <Box
        ref={sectionRef}
        textAlign="center"
        sx={{ pt: 10, ml: { xs: 2, sm: 0 }, mr: { xs: 2, sm: 0 } }}
      >
        <Typography variant="h4" gutterBottom>
          Kontaktujte nás
        </Typography>
        <Typography sx={{ mb: 4 }}>
          Vyplňte formulár a odpovieme vám do 24 hodín.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
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
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Váš email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Vaša správa"
            name="message"
            value={formData.message}
            onChange={handleChange}
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
          <Snackbar
            open={sent}
            autoHideDuration={4000}
            onClose={() => setSent(false)}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              Správa bola úspešne odoslaná!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
}
