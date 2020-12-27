import React, { useEffect, useState } from 'react';
import { Col, List, Row } from 'antd';
import { getCategories, getDrinks } from '../../services/drinks';
import { DrinkCard } from '../../components/DrinkCard/DrinkCard';
import { FilterDrinks } from '../../components/FilterDrinks/FilterDrinks';
import { SearchDrinks } from '../../components/SearchDrinks/SearchDrinks';
import { SortDrinks } from '../../components/SortDrinks/SortDrinks';

export const DrinkList = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  const getDrinksHandler = async (params = {}) => {
    try {
      setLoading(true);
      const newParams = { ...queryParams, ...params };
      setQueryParams(newParams);
      const data = await getDrinks(newParams);
      setDrinks(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getCategoriesHandler = async () => {
    try {
      setCategoriesLoading(true);
      const data = await getCategories();
      setCategories(data);
      setCategoriesLoading(false);
    } catch (error) {
      setCategoriesLoading(false);
    }
  };

  useEffect(() => {
    if (!drinks.length) {
      getDrinksHandler();
    }
    if (!categories.length) {
      getCategoriesHandler();
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
              <FilterDrinks categories={categories} onFilterHandler={getDrinksHandler} loading={categoriesLoading}/>
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
            <DrinkCard drink={drink}/>
          </List.Item>
        )}
      />
    </>
  );
};
