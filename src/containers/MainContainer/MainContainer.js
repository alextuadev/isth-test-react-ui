import { Container, Grid } from '@material-ui/core';
import React from 'react';
import CentralContainer from '../../components/CentralContainer/CentralContainer';
import SidebarItems from '../../components/SidebarItems/SidebarItems';
import './style.css'

function MainContainer() {
  return (
    <div className="main-container">
      <Grid container>
        <Grid item xs={3} md={2}>
          <SidebarItems />
        </Grid>

        <Grid
          item xs={9} md={10}>
          <CentralContainer />
        </Grid>
      </Grid>



    </div>
  );
}

export default MainContainer;
