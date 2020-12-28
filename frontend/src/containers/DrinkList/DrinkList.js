import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, List, Row } from 'antd';
import { fetchCategories } from '../../features/categories/categoriesSlice';
import { fetchDrinks } from '../../features/drinks/drinksSlice';
import { DrinkCard } from '../../components/DrinkCard/DrinkCard';
import { FilterDrinks } from '../../components/FilterDrinks/FilterDrinks';
import { SearchDrinks } from '../../components/SearchDrinks/SearchDrinks';
import { SortDrinks } from '../../components/SortDrinks/SortDrinks';

export const DrinkList = () => {
  const dispatch = useDispatch()
  const [queryParams, setQueryParams] = useState({});

  const {
    drinks,
    status: drinksStatus,
  } = useSelector((state) => state?.drinks) || {};

  const {
    categories,
    status: categoriesStatus,
  } = useSelector((state) => state?.categories) || {}

  const getDrinksHandler = (params = {}) => {
    const newParams = { ...queryParams, ...params };
    setQueryParams(newParams);
    dispatch(fetchDrinks(newParams));
  };

  useEffect(() => {
    if (drinksStatus === 'idle') {
      dispatch(fetchDrinks());
    }
    if (categoriesStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [drinksStatus, categoriesStatus, dispatch]);

  return (
    <>
      {
        drinks && drinks.length ? (
          <Row gutter={[16, 16]}>
            <Col md={12} lg={16}>
              <SearchDrinks loading={drinksStatus === 'loading'} onSearchHandler={getDrinksHandler}/>
            </Col>
            <Col md={6} lg={3}>
              <FilterDrinks categories={categories} onFilterHandler={getDrinksHandler} loading={categoriesStatus === 'loading'}/>
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
        loading={drinksStatus === 'loading' || categoriesStatus === 'loading'}
        renderItem={drink => (
          <List.Item>
            <DrinkCard drink={drink}/>
          </List.Item>
        )}
      />
    </>
  );
};
