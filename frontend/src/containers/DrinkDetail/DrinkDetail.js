import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Empty, Space, Spin } from 'antd';
import { fetchDrink, selectDrinkById } from '../../features/drinks/drinksSlice';
import { DrinkDescription } from '../../components/DrinkDescription/DrinkDescription';

export const DrinkDetail = ({ match }) => {
  const dispatch = useDispatch()
  const drinkId = Number(match.params.id);

  const drink = useSelector((state) => selectDrinkById(state, drinkId))
  const { status } = useSelector((state) => state?.drinks);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDrink(drinkId));
    }
  }, [drinkId, status, dispatch]);

  let content;
  if (status === 'succeeded' && drink) {
    content = <DrinkDescription drink={drink} />
  } else if (status === 'loading') {
    content = <Spin />
  } else {
    content = <Empty />
  }

  return (
    <Space direction="vertical">
      {content}
      <Link to={{pathname: '/'}}>
        Go back
      </Link>
    </Space>
  )
};
