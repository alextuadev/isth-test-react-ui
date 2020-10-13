import { Container } from '@material-ui/core';
import React from 'react';
import './App.css'
import ActionHeader from './components/ActionHeader/ActionHeader';
import Header from './components/Header/Header';
import MainContainer from './containers/MainContainer/MainContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <ActionHeader />
      <MainContainer />
    </div>
  );
}

export default App;
