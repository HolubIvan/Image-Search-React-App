import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WwYdsWKYkxqd2zp0cTzMmSfSdKBIqZYvGFKB8DSAgjw'
    }
})