import React from 'react';
import Customer from './Customer/customer';
import useStyles from './styles';
import {useSelector} from 'react-redux';

const Customers = () => {
    const customers = useSelector((state) => state.customers);
    const classes =  useStyles();

    console.log(customers)
     return(
        <>
            <h1>Customer-Liste</h1>
            <Customer />
            <Customer />
        </>
    );
}

export default Customers;