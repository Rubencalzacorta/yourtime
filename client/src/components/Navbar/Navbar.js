import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const useStyles = makeStyles((theme) => ({

    title: {
        flexGrow: 1,
        textAlign: "right"

    },


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
            <AppBar className={classes.root}>
                <Toolbar className="justify-xs-space-between">
                    <button className="button" onClick={props.toggleAddTodo} >Add to do</button>
                    <p className={classes.title} style={{ textDecoration: "underline" }} onClick={props.logOut} >Log out</p>
                </Toolbar>
            </AppBar>
        </HideOnScroll>

    );
}
