import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '../../icons/More';

import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    addButton: {
        fontFamily: "Helvetica Neue"
    }
}));


function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <HideOnScroll {...props}>
            <AppBar>
                <Toolbar className={classes.root}>
                    <button className="button" onClick={props.toggleAddTodo} color="inherit">Add to do</button>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </HideOnScroll>

    );
}



















// export default function HideAppBar(props) {
//     return (

//         
//             <AppBar>
//                 <Toolbar>
//                     <Typography onClick={props.toggleAddTodo} variant="h6">Add Todo</Typography>
//                 </Toolbar>
//             </AppBar>
//         </HideOnScroll>


//     );
// }