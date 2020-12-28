import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, List, Row } from 'antd';
import { fetchCategories } from '../../features/categories/categoriesSlice';
import {
  fetchDrinks,
  fetchFilteredDrinks,
  resetFilteredDrinks
} from '../../features/drinks/drinksSlice';
import { DrinkCard } from '../../components/DrinkCard/DrinkCard';
import { FilterDrinks } from '../../components/FilterDrinks/FilterDrinks';
import { SearchDrinks } from '../../components/SearchDrinks/SearchDrinks';
import { SortDrinks } from '../../components/SortDrinks/SortDrinks';

export const DrinkList = () => {
  const dispatch = useDispatch()
  const [queryParams, setQueryParams] = useState({});
  const [resetCount, setResetCount] = useState(0);

  const {
    filteredDrinks,
    status: drinksStatus,
  } = useSelector((state) => state?.drinks) || {};

  const {
    categories,
    status: categoriesStatus,
  } = useSelector((state) => state?.categories) || {}

  const isLoading = (
    drinksStatus === 'loading' ||
    categoriesStatus === 'loading'
  );

  const getDrinksHandler = (params = {}) => {
    const newParams = { ...queryParams, ...params };
    setQueryParams(newParams);
    const cleanParamValues = Object.values(newParams).filter(n => n);
    if (cleanParamValues.length) {
      dispatch(fetchFilteredDrinks(newParams));
    } else {
      dispatch(resetFilteredDrinks());
    }
  };

  const resetHandler = () => {
    setQueryParams({});
    dispatch(resetFilteredDrinks());
    setResetCount(resetCount + 1);
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
        drinksStatus !==  'idle' && drinksStatus !== 'failed' ? (
          <Row gutter={[16, 16]}>
            <Col md={9} lg={14}>
              <SearchDrinks
                loading={isLoading}
                onSearchHandler={getDrinksHandler}
                reset={resetCount}
              />
            </Col>
            <Col md={6} lg={3}>
              <FilterDrinks
                categories={categories}
                onFilterHandler={getDrinksHandler}
                loading={isLoading}
                reset={resetCount}
              />
            </Col>
            <Col md={6} lg={5}>
              <SortDrinks
                drinks={filteredDrinks}
                onSortHandler={getDrinksHandler}
                reset={resetCount}
                loading={isLoading}
              />
            </Col>
            <Col md={3} lg={2} style={{textAlign: 'right'}}>
              <Button
                onClick={resetHandler}
                loading={isLoading}
              >
                Reset Filters
              </Button>
            </Col>
          </Row>
        ) : null
      }
      <List
        dataSource={filteredDrinks}
        grid={{ gutter: 16, column: 4 }}
        loading={isLoading}
        renderItem={drink => (
          <List.Item>
            <DrinkCard drink={drink}/>
          </List.Item>
        )}
      />
    </>
  );
};
