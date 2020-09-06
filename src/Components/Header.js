import React, {use} from 'react'
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import avatar from '../img/fotoTano.jpeg';
import Typed from 'react-typed';

//CSS Styles

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: 'tomato',
    },
    subtitle: {
        color: 'tan',
        marginBottom: '3rem',
    },
    typedContainer: {
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        textAlign: 'center',
        zIndex: '1'
    }
}));

const Header = () => {
const classes = useStyles();
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify='center'>
            <Avatar className={classes.avatar} src={avatar} alt='foto mia' />
            </Grid>
            <Typography className={classes.title} variant='h4' >
                <Typed strings={['Pablo Tano Moracci']} typeSpeed={60} />
            </Typography>

            <br/>

            <Typography className={classes.subtitle} variant='h5' >
                <Typed 
                strings={['HTML', 'CSS', 'Javascript', 'React', 'Material UI', 'Bootstrap']} 
                typeSpeed={40} 
                backSpeed={60}  
                loop  
                />
            </Typography> 

        </Box>
    )
}

export default Header
