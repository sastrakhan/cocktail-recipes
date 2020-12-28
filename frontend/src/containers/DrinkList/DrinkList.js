import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from 'antd';
import { DrinkListHeader } from './DrinkListHeader';
import { fetchCategories } from '../../features/categories/categoriesSlice';
import {
  fetchDrinks,
  fetchFilteredDrinks,
  resetFilteredDrinks
} from '../../features/drinks/drinksSlice';
import { DrinkCard } from '../../components/DrinkCard/DrinkCard';

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
          <DrinkListHeader
            categories={categories}
            filteredDrinks={filteredDrinks}
            isLoading={isLoading}
            getDrinksHandler={getDrinksHandler}
            resetCount={resetCount}
            resetHandler={resetHandler}
          />
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
