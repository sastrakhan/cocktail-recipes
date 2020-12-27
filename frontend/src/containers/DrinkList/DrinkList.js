import { List, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DrinkCard } from '../../components/DrinkCard/DrinkCard';

export const DrinkList = () => {
  const [loading, setLoading] = useState(false);
  const [drinks, setDrinks] = useState([]);

  const getDrinks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/drinks/');
      setDrinks(response.data);
      setLoading(false);
    } catch (error) {
      notification.error({
        message: 'Error',
        description: error.response.data.detail
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <List
      dataSource={drinks}
      grid={{ gutter: 16, column: 4 }}
      loading={loading}
      renderItem={drink => (
        <List.Item>
          <DrinkCard drink={drink} />
        </List.Item>
      )}
    />
  );
};
