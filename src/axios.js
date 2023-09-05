import axios from "axios";

const  instance= axios.create({
    baseURL: 'https://your-payment-server-url.com/'

});

export default instance;