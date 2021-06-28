import axios from 'axios';

//https://api.hgbrasil.com/weather?key=c6195919&lat=-23.682&lon=-46.875

export const key = 'c6195919';

const api = axios.create({
    baseURL:'https://api.hgbrasil.com'
})


export default api