import axios from 'axios';
import { TPizza } from '../types';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export default {
  getPizzas: () => instance.get<TPizza[]>('pizzas'),
};
