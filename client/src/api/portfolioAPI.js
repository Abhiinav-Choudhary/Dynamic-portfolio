import axios from "axios";
const API_URL = "http://localhost:5000/portfolios";

export const getPortfolios = () => axios.get(API_URL);
export const addPortfolio = (data) => axios.post(API_URL, data);
export const getPortfolioById = (id) => axios.get(`${API_URL}/${id}`);
