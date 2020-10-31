import APIService from './APIService'
import AxiosHandler from './AxiosHandler'
import { TokenService } from './TokenService';

export const tokenService = new TokenService(window.localStorage);
const apiUrl = process.env.REACT_APP_API_URL || 'https://beertech-banco.herokuapp.com/beercoins';
const axiosHandler = new AxiosHandler(apiUrl, tokenService);
export const apiService = new APIService(axiosHandler)
