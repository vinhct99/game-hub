import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'fedaa7d174264d9ab9535a0d4825d794'
    }
})