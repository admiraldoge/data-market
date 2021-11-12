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
import CreateCollectorModal from "../components/general/CreateCollectorModal";
import {use} from "ast-types";

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
	const [collectorModalData, setCollectorModalData] = useState({} as any);
	const [createModalOpen, setCreateModalOpen] = React.useState(false);
	const [collectorModalOpen, setCollectorModalOpen] = React.useState(false);
	const handleOpenCreateModal = () => setCreateModalOpen(true);
	const handleCloseCreateModal = () => setCreateModalOpen(false);
	const openCollectorModal = () => {
		setCollectorModalData({});
		setCollectorModalOpen(true);
	}
	const closeCollectorModal = () => setCollectorModalOpen(false);

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
              <Button variant="contained" onClick={() => router.push('/user/sign-in')}>Log in User</Button>
              <Button variant="outlined" onClick={() => router.push('/admin/sign-in')}>Log In Admin</Button>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          UCB II-2021
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Taller de sistemas
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
      <CreateFormModal open={createModalOpen} handleOpen={handleOpenCreateModal} handleClose={handleCloseCreateModal}/>
      <CreateCollectorModal data={collectorModalData} open={collectorModalOpen} handleOpen={openCollectorModal} handleClose={closeCollectorModal}/>
    </ThemeProvider>
  );
}

