import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
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
import { read } from '../../../api/collector';
import { useEffect, useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import {useRouter} from "next/dist/client/router";
import CreateFormModal from "../../../components/general/CreateFormModal";
import CreateCollectorModal from "../../../components/general/CreateCollectorModal";
import Navbar from '../../../components/navbar/navbar';
import {use} from "ast-types";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {IconButton} from '@mui/material';
import CopyAll from '@mui/icons-material/CopyAll';
import Assessment from '@mui/icons-material/Assessment';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {downloadCollectorSubmission} from '../../../api/reports';

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

const drawerWidth = 240;
const theme = createTheme();

export default function Album() {
  const [forms, setForms] = useState([]);
  const [value, setValue] = useState("");
	const router = useRouter();
	const [collectorModalData, setCollectorModalData] = useState({} as any);
	const [createModalOpen, setCreateModalOpen] = React.useState(false);
	const [collectorModalOpen, setCollectorModalOpen] = React.useState(false);
	const handleOpenCreateModal = () => setCreateModalOpen(true);
	const handleCloseCreateModal = () => setCreateModalOpen(false);
	const openCollectorModal = () => setCollectorModalOpen(true);
	const closeCollectorModal = () => setCollectorModalOpen(false);
  const report = ((collectorId: string) => {
    router.push('/collectors/report/'+collectorId);
  })
  useEffect(() => {
    read().then( (res) => {
      setForms(res.data.items);
    }).catch( (error) => {
      alert(error);
    });
  }, []);
  return (
    <>
    <Navbar />
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Data Market
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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
              Recolectores
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
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
                    <CardHeader
                      action={
                        <>
                        <IconButton aria-label="settings" onClick={() => {
                          report(form._id);
                        }}>
                          <Assessment />
                        </IconButton>
                        </>
                      }
                      title={form.name.value}
                    />
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={form.form.thumbnail.src}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {form.form.name.value}
                    </Typography>
                    <Typography>

                    </Typography>
                  </CardContent>
                  <CardActions>
	                  <Button size="small" onClick={() => {
	                  	console.log('collector',form);
		                  downloadCollectorSubmission(form._id);
	                  }}>Descargar Respuestas</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      </Box>
    </Box>
    </>
  );
}
