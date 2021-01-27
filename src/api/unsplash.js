import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID RjxAn4g3HtpthghE4H2h-fCeQckFlyKRnydz5_nZbqk'
    }
});