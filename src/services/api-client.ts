import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '62d3be09da2c4dd1a72a6d06342eb00a'
    }
})