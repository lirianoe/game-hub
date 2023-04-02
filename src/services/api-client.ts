import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'a632d8fab5cc44f58da7387f390081e2'
    }
})