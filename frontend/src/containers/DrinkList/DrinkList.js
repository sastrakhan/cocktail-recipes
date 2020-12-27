import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import { getDrinks } from '../../services/drinks';
import { DrinkCard } from '../../components/DrinkCard/DrinkCard';
import { SearchDrinks } from '../../components/SearchDrinks/SearchDrinks';

export const DrinkList = () => {
  const [loading, setLoading] = useState(false);
  const [drinks, setDrinks] = useState([]);

  const getDrinksHandler = async (params = {}) => {
    try {
      setLoading(true);
      const data = await getDrinks(params);
      setDrinks(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDrinksHandler();
  }, []);

  return (
    <>
      <SearchDrinks loading={loading} onSearchHandler={getDrinksHandler} />
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
    </>
  );
};
