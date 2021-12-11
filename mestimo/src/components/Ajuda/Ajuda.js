import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ajuda.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Ajuda = () => (
  <div className={styles.Ajuda}>
    <header>
      <Box classname={styles.box} sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
    <div classname={styles.box}>

    </div>
  </div>
);

Ajuda.propTypes = {};

Ajuda.defaultProps = {};

export default Ajuda;
