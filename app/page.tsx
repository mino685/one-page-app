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
  CssBaseline,
  Divider,
  Drawer,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
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



interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Home(props: Props) {
  const { window } = props;
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Nest Frame Studio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const drawerWidth = 240;

  const container = window !== undefined ? () => window().document.body : undefined;


    return (
      <>
      <Head>
        <title>Nest Frame STUDIO</title>
        <meta name="description" content="Webové aplikácie, dashboardy a firemné riešenia." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Nest Frame Studio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #e3f2fd, #f5f5f5)',
          py: 8,
          color: '#263238',
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center" sx={{ mb: 10, mt:4 }}>
            <Typography variant="h2" fontWeight="bold" sx={{ color: '#0d47a1' }} gutterBottom>
              Nest Frame STUDIO
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Vytvárame moderné dashboardy, firemné systémy a webové aplikácie na mieru.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ pt:3, pb:3, pl: 6, pr: 6, backgroundColor: '#0d47a1', ':hover': { backgroundColor: '#1565c0' } }}
              onClick={() => console.log("KONTAKT")}
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