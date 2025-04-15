'use client';

import {
  Alert,
  AppBar,
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
  Drawer,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
  Paper,
  Snackbar,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Head from "next/head";
import { useRef, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';




export default function Home() {

  const form = useRef<HTMLFormElement>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['O nás', 'Služby', 'Kontakt'];


    return (
      <>
      <Head>
        <title>Nest Frame STUDIO</title>
        <meta name="description" content="Webové aplikácie, dashboardy a firemné riešenia." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="sticky" sx={{ backgroundColor: '#0d47a1' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Nest Frame STUDIO
          </Typography>
          {isMobile ? (
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            navItems.map((item) => (
              <Button key={item} color="inherit">{item}</Button>
            ))
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 240 } }}
      >
        <List>
          {navItems.map((item, index) => (
              <ListItemText primary={item} key={index} />
          ))}
        </List>
      </Drawer>

      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #e3f2fd, #f5f5f5)',
          py: 8,
          color: '#263238',
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center" sx={{ mb: 10 }}>
            <Typography variant="h2" fontWeight="bold" sx={{ color: '#0d47a1' }} gutterBottom>
              Nest Frame STUDIO
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Vytvárame moderné dashboardy, firemné systémy a webové aplikácie na mieru.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: '#0d47a1', ':hover': { backgroundColor: '#1565c0' } }}
            >
              Kontaktujte nás
            </Button>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h4" gutterBottom>
              O nás
            </Typography>
            <Typography>
              Sme slovenské softvérové štúdio, ktoré spája dizajn, technológiu a obchod. Zameriavame sa na kvalitné, škálovateľné a bezpečné riešenia pre malé aj veľké firmy.
            </Typography>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h4" textAlign="center" gutterBottom>
              Naše služby
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: 'Webové dashboardy',
                  desc: 'Vizuálne rozhrania pre správu dát a metriky.',
                },
                {
                  title: 'Firemné aplikácie',
                  desc: 'Interné nástroje, digitalizácia procesov a automatizácia.',
                },
                {
                  title: 'Webové stránky',
                  desc: 'Moderné prezentačné weby optimalizované pre výkon a SEO.',
                },
              ].map((s, i) => (
                <Grid key={i}>
                  <Paper elevation={6} sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: '#0d47a1' }}>
                      {s.title}
                    </Typography>
                    <Typography>{s.desc}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box textAlign="center">
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
                mx: 'auto',
                textAlign: 'left',
                backgroundColor: '#ffffff',
                p: 4,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <TextField label="Vaše meno" name="user_name" fullWidth required sx={{ mb: 2 }} />
              <TextField label="Váš email" name="user_email" type="email" fullWidth required sx={{ mb: 2 }} />
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
                sx={{ backgroundColor: '#0d47a1', ':hover': { backgroundColor: '#1565c0' } }}
                fullWidth
              >
                Odoslať správu
              </Button>
            </Box>
          </Box>

          <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
            <Alert severity="success" sx={{ width: '100%' }}>
              Správa bola úspešne odoslaná!
            </Alert>
          </Snackbar>
        </Container>
      </Box>
      </>
    )
  }