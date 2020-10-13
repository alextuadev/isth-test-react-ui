import React, { useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './style.css'

function Header() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header">
      <Grid container>
        <Grid item xs={7} md={5} lg={4}>
          <Paper>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
            >
              <Tab label="Precio Pais" />
              <Tab label="Costo" />
              <Tab label="Excepciones" />
            </Tabs>

          </Paper>
        </Grid>

        <Grid
          item xs={5} md={7} lg={8}>
          <div className="container-profile">
            <span color="primary">Nombre de usuario</span>
            <a href="#" > <NotificationsIcon color="primary" /></a>
            <a href="#" > <ExitToAppIcon color="primary" /> </a>
          </div>
        </Grid>
      </Grid>

    </div>
  );
}

export default Header;
