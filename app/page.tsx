'use client';

import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  CircularProgress,
  Collapse,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  OutlinedInput,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";




export default function Home() {

  const form = useRef<HTMLFormElement>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
    return (
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
          py: 8,
          color: '#0d47a1',
        }}
      >
        <Container maxWidth="md">
          {/* Hero sekcia */}
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              NestFrame STUDIO
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Moderné webové dashboardy a aplikácie pre firmy
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: '#0d47a1', color: '#fff', ':hover': { backgroundColor: '#1565c0' } }}
            >
              Kontaktujte nás
            </Button>
          </Box>
  
          {/* O nás */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h4" gutterBottom>
              O nás
            </Typography>
            <Typography>
              Sme vývojárske štúdio zamerané na tvorbu prehľadných a rýchlych webových riešení.
              Pomáhame firmám digitalizovať interné procesy a vytvárame profesionálne používateľské rozhrania.
            </Typography>
          </Box>
  
          {/* Služby */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" textAlign="center" gutterBottom>
              Služby
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: 'Webové dashboardy',
                  desc: 'Prehľadné vizualizácie dát, KPI a výkonu.',
                },
                {
                  title: 'Firemné aplikácie',
                  desc: 'Digitalizácia interných procesov a nástrojov.',
                },
                {
                  title: 'Responzívne weby',
                  desc: 'Profesionálne prezentácie a microsites na mieru.',
                },
              ].map((s, i) => (
                <Grid>
                  <Paper elevation={4} sx={{ p: 3, textAlign: 'center', backgroundColor: '#e3f2fd' }}>
                    <Typography variant="h6" fontWeight="bold">{s.title}</Typography>
                    <Typography>{s.desc}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
  
          {/* Kontakt */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Kontaktujte nás
            </Typography>
            <Typography sx={{ mb: 4 }}>Napíšte nám správu, odpovieme do 24 hodín.</Typography>
  
            <Box
              component="form"
              ref={form}
              onSubmit={sendEmail}
              sx={{ maxWidth: 500, mx: 'auto', textAlign: 'left' }}
            >
              <TextField label="Vaše meno" name="user_name" fullWidth required sx={{ mb: 2 }} />
              <TextField label="Váš email" name="user_email" fullWidth required sx={{ mb: 2 }} />
              <TextField
                label="Vaša správa"
                name="message"
                fullWidth
                multiline
                rows={4}
                required
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#0d47a1', color: '#fff', ':hover': { backgroundColor: '#1565c0' } }}
                fullWidth
              >
                Odoslať
              </Button>
            </Box>
          </Box>
  
          {/* Potvrdenie */}
          <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
            <Alert severity="success" sx={{ width: '100%' }}>
              Správa bola úspešne odoslaná!
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    )
  }