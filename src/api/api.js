import axios from "axios";

const instance = axios.create({
  baseURL: 'https://we-project-backend.azurewebsites.net/'
})

export default instance;