import React from 'react';
import {Avatar, Card} from 'antd';

export const DrinkCard = ({drink}) => (
  <Card>
    <Card.Meta
      avatar={
        <Avatar src={drink.strDrinkThumb}/>
      }
      title={drink.strDrink}
    />
  </Card>
);
