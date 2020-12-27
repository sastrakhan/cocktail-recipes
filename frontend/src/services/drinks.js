import { notification } from 'antd';
import axios from 'axios';

export const getDrinks = async (params) => {
  const queryParams = new URLSearchParams(params);
  const queryString = Object.keys(params).length ? `?${queryParams}` : '';

  try {
    const response = await axios.get(`/api/drinks/${queryString}`);
    return response.data;
  } catch (error) {
    notification.error({
      message: 'Error',
      description: error.response.data.detail
    });
    return error;
  }
};