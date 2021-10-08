import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/navbar/navbar';
import { read } from '../api/forms';
import { useEffect, useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import {useRouter} from "next/dist/client/router";
import CreateFormModal from "../components/general/CreateFormModal";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Data Market
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function Album() {
  const [forms, setForms] = useState([]);
	const router = useRouter();

	const [createModalOpen, setCreateModalOpen] = React.useState(false);
	const handleOpenCreateModal = () => setCreateModalOpen(true);
	const handleCloseCreateModal = () => setCreateModalOpen(false);

  useEffect(() => {
    read().then( (res) => {
      setForms(res);
    }).catch( (error) => {
      alert(error);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Data Market
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Aqui puedes crear y editar tus formularios
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={() => handleOpenCreateModal()}>Crear nuevo formulario</Button>
              <Button variant="outlined">Buscar formulario</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 12 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {forms.map((form:any) => (
              <Grid item key={form} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={form.thumbnail.src}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {form.name.value}
                    </Typography>
                    <Typography>

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => {router.push(`/c/${form._id}`)}}>Llenar</Button>
                    <Button size="small" onClick={() => {router.push(`forms/${form._id}/edit`)}}>Modificar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
      <CreateFormModal open={createModalOpen} handleOpen={handleOpenCreateModal} handleClose={handleCloseCreateModal}/>
    </ThemeProvider>
  );
}
