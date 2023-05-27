import axios from "axios"; 

const AxiosWar = axios.create({
  baseURL : 'https://swapi.dev/api/',
});

export default AxiosWar;