import { Container, Grid } from '@material-ui/core';
import React from 'react';
import CentralContainer from '../components/CentralContainer/CentralContainer';
import SidebarItems from '../components/SidebarItems/SidebarItems';


function MainContainer() {
  return (
    <div className="main-container">
      <Grid container>
        <Grid item xs={4}>
          <SidebarItems />
        </Grid>

        <Grid
          item xs={8}>
          <CentralContainer />
        </Grid>
      </Grid>



    </div>
  );
}

export default MainContainer;
