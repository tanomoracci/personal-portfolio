import React, {useState} from 'react';
/* import {makeStyles} from '@material-ui/core/styles';
 */
import MobilRightMenuSlider from '@material-ui/core/Drawer'; 
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List, 
    Typography,
    Box,
    makeStyles,
    ListItemIcon
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home, 
    Apps, 
    ContactMail,
} from '@material-ui/icons';
import avatar from '../img/fotoTano.jpeg';

//CSS Styles
const useStyles = makeStyles( theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%',
    },

    avatar: {
        diplay: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: 'tan',

    }
}));

const menuIcons = [
    {
        listIcon: <Home />,
        listText: 'Home'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contact Me'
    },
];

const NavBar = () => {
    const [state, setState] = useState({
        right: false
    });
    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open});
    });

    const classes = useStyles();

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(slider, false)}
        >
        <Avatar className={classes.avatar} src={avatar} alt='foto del tano'/>
        <Divider />
            <List>
                {
                    menuIcons.map ((lsItem, key) =>(
                        <ListItem button key={key} >
                            <ListItemIcon className={classes.listItem} >{lsItem.listIcon}</ListItemIcon>
                            <ListItemText className={classes.listItem}> {lsItem.listText}</ListItemText>
                            </ListItem>)
                    )
                }
            </List>
        </Box>
        );
    
        return (
        <>
        <Box component='nav'>
            <AppBar position='static' style={{background: '#222'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider('right', true)} >
                        <ArrowBack style={{color: 'tomato'}}/>
                    </IconButton>
                    <Typography variant='h5' style={{color: 'tan'}}>
                        Portfolio
                    </Typography>
                    <MobilRightMenuSlider
                    anchor='right'
                    open={state.right}
                    onClose={toggleSlider('right', false)}
                    >
                        {sideList('right')} 
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default NavBar

