import React, { useEffect, useState } from 'react';
import { Col, List, Row } from 'antd';
import { getDrinks } from '../../services/drinks';
import { DrinkCard } from '../../components/DrinkCard/DrinkCard';
import { FilterDrinks } from '../../components/FilterDrinks/FilterDrinks';
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
      <Row gutter={[16,16]} style={{margin: '5px 0 20px 0'}}>
        <Col md={18}>
          <SearchDrinks loading={loading} onSearchHandler={getDrinksHandler} />
        </Col>
        <Col md={6}>
          <FilterDrinks drinks={drinks} onFilterHandler={getDrinksHandler} />
        </Col>
      </Row>
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
