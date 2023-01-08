import axios from "axios";

export const api = axios.create({
  baseURL: 'https://jandre-dtmoney.netlify.app/api',
})