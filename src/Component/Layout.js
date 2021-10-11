import { Container, makeStyles } from "@material-ui/core";
import React, { useState } from "react";


const useStyles = makeStyles({
    page:{
        background: '#f9f9f9',
        width: '100%'
    }
})

export default function Layout( {children }){
const classes = useStyles();

    return (
        <>
            {/* App Bar */}
            {/* Side Drawer */}

        <Container className={classes.page}>
            {children}
        </Container>
        
        </>
    )
}