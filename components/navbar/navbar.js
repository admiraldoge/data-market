import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function PersistentDrawerLeft() {
  const router = useRouter();
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">
        Data-Market
      </Typography>
      <Button color="inherit" onClick={() => router.push('/admin')}>
        Formularios
      </Button>
      <Button color="inherit" onClick={() => router.push('/admin/users')}>
        Usuarios
      </Button>
      <Button color="inherit" onClick={() => router.push('/')}>
        Sign out
      </Button>
    </Toolbar>
  </AppBar>
  );
}
