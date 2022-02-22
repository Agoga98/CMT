import React, {useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import {getCustomers} from './actions/customers'
import Customers from './components/Customers/customers'
import ConstructionProjetcs from './components/ConstructionProjects/ConstructionProjects'
import KundenverwaltungBild from './images/AppImg.png'
import useStyles from './styles'

const App = () => {
    const classes =  useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomers)
    }, [dispatch])

    return(
        <Container maxwidth='lg' >
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Kundenverwaltung</Typography>
                <img className={classes.image} src={KundenverwaltungBild} alt="KundenverwaltungBild" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Customers />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ConstructionProjetcs />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>  
    )
}

export default App;