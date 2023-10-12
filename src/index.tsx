import axios from "axios";
import { type UseBaseQueryResult, useQuery } from 'react-query';

export interface ItemProps {
  category: ICategory;
  _id: string;
  name: string;
  unit: string;
  imageUrl: string;
  description: string;
  quantity?: number;
  price: number;
  isFetching: boolean;
};

export interface ICategory {
  id: number;
  name: string;
};

export const api = axios.create({
baseURL: 'https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions',
});

export const getProducts = async (): Promise<ItemProps> => {
    const {data} = await api.get('/read-products');
    return data;
};

const useProducts = (): UseBaseQueryResult<ItemProps[]> => {
    return useQuery(['products'], () => getProducts());
};

export default useProducts;
