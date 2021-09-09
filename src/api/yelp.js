 import axios from 'axios';

 export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization : 'Bearer gZ6f-h2jIThiEX5Vz4D9o5G9RVT-5lTDEM5Pn3sNmNKycJgflpXAji2fvFM1fCgscvC3KBLOaRKjgxc5NwD_zhhQZ3TMpBmhdnC5XoAskMqkJ2wE-5pjhDi7mFw3YXYx'
    }
 });
 
