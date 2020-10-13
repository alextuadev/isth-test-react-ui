import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css'


function ActionHeader() {

  return (
    <div className="actionFilter">
      <Grid container>
        <Grid item xs={7} md={6}>
          <form autoComplete="off" className='flex-form'>
            <TextField label="Item number o UPC" />
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
            >
              Agregar a la lista
            </Button>
          </form>
        </Grid>
      </Grid>

    </div>
  );
}

export default ActionHeader;





