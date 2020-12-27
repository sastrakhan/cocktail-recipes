import React, { useEffect, useState } from 'react';
import { Col, List, Row } from 'antd';
import { getDrinks } from '../../services/drinks';
import { DrinkCard } from '../../components/DrinkCard/DrinkCard';
import { FilterDrinks } from '../../components/FilterDrinks/FilterDrinks';
import { SearchDrinks } from '../../components/SearchDrinks/SearchDrinks';
import { SortDrinks } from '../../components/SortDrinks/SortDrinks';

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
    if (!drinks.length) {
      getDrinksHandler();
    }
  }, []);

  return (
    <>
      {
        drinks.length ? (
          <Row gutter={[16, 16]}>
            <Col md={12} lg={16}>
              <SearchDrinks loading={loading} onSearchHandler={getDrinksHandler}/>
            </Col>
            <Col md={6} lg={3}>
              <FilterDrinks drinks={drinks} onFilterHandler={getDrinksHandler}/>
            </Col>
            <Col md={6} lg={5}>
              <SortDrinks drinks={drinks} onSortHandler={getDrinksHandler}/>
            </Col>
          </Row>
        ) : null
      }
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
