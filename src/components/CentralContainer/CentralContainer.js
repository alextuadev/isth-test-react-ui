import React, { useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './style.css'

function CentralContainer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="central-container">
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
            >
              <Tab label="Simulador de precios" />
              <Tab label="Historico de precios" />
              <Tab label="Precios competencia" />
              <Tab label="True Cost" />
            </Tabs>
          </Paper>
       </Grid>
       <Grid>


       </Grid>


      </Grid>

    </div>
  );
}

export default CentralContainer;

