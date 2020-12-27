import { notification } from 'antd';
import { setup } from 'axios-cache-adapter'

const api = setup({
  // `axios` options
  baseURL: process.env.REACT_APP_API_URL,

  // `axios-cache-adapter` options
  cache: {
    maxAge: 15 * 60 * 1000
  }
})

export const getDrinks = async (params) => {
  const queryParams = new URLSearchParams(params);
  const queryString = Object.keys(params).length ? `?${queryParams}` : '';

  try {
    const response = await api.get(`/api/drinks/${queryString}`);
    return response.data;
  } catch (error) {
    notification.error({
      message: 'Error',
      description: error.response.data.detail
    });
    return error;
  }
};

export const getDrinkById = async (id) => {
  try {
    const response = await api.get(`/api/drinks/${id}/`);
    return response.data;
  } catch (error) {
    notification.error({
      message: 'Error',
      description: error.response.data.detail
    });
    return error;
  }
};
