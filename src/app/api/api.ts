import axios from "axios";
import { BASE_URL } from "./baseUrl";
import { User } from "./types";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/?results=10`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};