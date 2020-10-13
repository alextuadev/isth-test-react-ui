import React, { useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './style.css'
import { Button, makeStyles, TextField } from '@material-ui/core';


function CentralContainer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const useStyles = makeStyles((theme) => ({
    inputs: {
      '& > *': {
        margin: theme.spacing(1),
        width: '20ch',
        marginTop: 20
      },
    },
    smallInputs: {
      '& > *': {
        margin: theme.spacing(0.1),
        width: '7ch'
      },
    },
    txtRight: {
      textAlign: 'right'
    }
  }));

  const classes = useStyles();

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
        <Grid item xs={12} className={classes.inputs} >
          <TextField label="Nombre proveedor" value="Isthmusit" className={classes.txtRight} />
          <TextField label="Precio pais(GTQ)" value="25.5" />
          <TextField label="Margen pais" value="21%" />
          <TextField label="Price gap pais" value="2%" />
        </Grid>

        <Grid item xs={12} className="mt2" >
          <strong>Precios actuales en tienda</strong>
        </Grid>

        <Grid item xs={12} className="mt2" >
          <div>
            Los precios actuales no cumplen con los estandares de la escalera entre formatos
            <Button>Corregir</Button>
          </div>
        </Grid>

        <Grid item xs={12} className="mt2" >
          <Grid container>
            <Grid item xs={3} className={classes.smallInputs} >
              <TextField label="Alta Ipsum" value="Isthmusit" className={classes.txtRight} />
              <TextField label="Precio pais(GTQ)" value="25.5" />
              <TextField label="Margen pais" value="21%" />
              <TextField label="Price gap pais" value="2%" />
            </Grid>

            <Grid item xs={3} className={classes.smallInputs} >
              <TextField label="Alta Ipsum" value="Isthmusit" className={classes.txtRight} />
              <TextField label="Precio pais(GTQ)" value="25.5" />
              <TextField label="Margen pais" value="21%" />
              <TextField label="Price gap pais" value="2%" />
            </Grid>

            <Grid item xs={3} className={classes.smallInputs} >
              <TextField label="Alta Ipsum" value="Isthmusit" className={classes.txtRight} />
              <TextField label="Precio pais(GTQ)" value="25.5" />
              <TextField label="Margen pais" value="21%" />
            </Grid>


            <Grid item xs={3} className={classes.smallInputs} >
              <TextField label="Alta Ipsum" value="Isthmusit" className={classes.txtRight} />
              <TextField label="Precio pais(GTQ)" value="25.5" />
              <TextField label="Margen pais" value="21%" />

            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
}

export default CentralContainer;

