import axios from "axios";

const instance = axios.create({
    baseURL:'https://exam8-shyngys-default-rtdb.firebaseio.com/'
})

export default instance;