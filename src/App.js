import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/styles'; 

const useStyles = makeStyles({
  particlesCanva: {
    position: 'absolute'
  }
});

function App() {
  const classes = useStyles();
  return (
    <>
      
     <NavBar />
     <Header />
     <Particles 
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,  
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: 'tomato'
              }
            },
            size: {
              value: 8,
              random: true, 
              anim: {
                enable: true,
                  speed: 15, 
                  size_min: 0.1,
                  sync: false,
              }
            }
          }
        }} />
    </>
  );
}

export default App;
