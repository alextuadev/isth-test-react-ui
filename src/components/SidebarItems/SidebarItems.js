import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './style.css'

import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
  },
  content: {
    padding: 10
  },
  first: {
    borderLeftWidth: 5,
    borderLeftColor: '#3f51b5'
  }
});

function SidebarItems() {
  const classes = useStyles();

  const data = [
    {
      id: '1234',
      status: 'activo',
      iva: 'exento',
      description: 'Detergente 35G',
      price: 25.5,
      currency: 'GTQ'
    },
    {
      id: '41234',
      status: 'activo',
      iva: 'gravado',
      description: 'Otra description',
      price: 30.5,
      currency: 'GTQ'
    },
    {
      id: '34141',
      status: 'inactivo',
      iva: 'exento',
      description: 'Otro Detergente 35G',
      price: 31.5,
      currency: 'GTQ'
    },
    {
      id: '123421',
      status: 'activo',
      iva: 'gravado',
      description: 'Detergente 35G',
      price: 29,
      currency: 'GTQ'
    }
  ]

  const renderRow = data.map((element, index) => {

    return (
      <Card className={[classes.root, (index == 0 && classes.first)]} variant="outlined">
        <CardContent className={classes.content} >
          <div>
            {element.id} | {element.status} | {element.iva}
          </div>
          <div>
            <p className="description">{element.description} <span>{element.price}{element.currency}</span></p>

          </div>
        </CardContent>
      </Card>
    );
  });



  return (
    <div className="sidebar-item">
      <h3>Items agregados</h3>
      {renderRow}

    </div>
  );
}

export default SidebarItems;
