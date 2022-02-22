export default (customers = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return customers;
        default:
            return customers;
    }
}