import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { useCurrentRoute } from '../hooks';
import { routesList } from '../router';

const drawerWidth = 240;

function AppBarComponent({ children }) {
  const route = useCurrentRoute();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawerContainer =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 1 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {routesList
          .filter((item) => item.title)
          .map((item, index) => (
            <>
              {index !== 0 && <Divider />}
              <ListItem key={index} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </>
          ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav">
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {route.title ? route.title : 'Route Title Not Found'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={drawerContainer}
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ p: 3, height: '100%', boxSizing: 'border-box' }}
      >
        {/* Just to fill the page height */}
        <Toolbar variant="dense" />
        <div style={{ height: 'calc(100% - 48px)' }}>{children}</div>
      </Box>
    </>
  );
}

export default AppBarComponent;
