import React, { useEffect, useState } from 'react';
import { Empty, Spin } from 'antd';
import { DrinkDescription } from '../../components/DrinkDescription/DrinkDescription';
import { getDrinkById } from '../../services/drinks';

export const DrinkDetail = ({ location, match }) => {
  const drink  = location?.state?.drink;
  const [currentDrink, setCurrentDrink] = useState(drink);
  const [loading, setLoading] = useState(false);

  const getDrink = async () => {
    const { id } = match.params;
    try {
      setLoading(true);
      const data = await getDrinkById(id);
      setCurrentDrink(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!drink && !currentDrink) {
      getDrink();
    }
  }, [])


  if (!loading && !currentDrink) {
    return <Empty />
  } else if (loading) {
    return <Spin />
  } else {
    return <DrinkDescription drink={currentDrink} />
  }
};
