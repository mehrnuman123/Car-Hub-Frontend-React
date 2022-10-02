const axios = require('axios');

axios.get('/api/v1/cars').then(resp => {

    console.log(resp.data);
})