import React from 'react';
import {Avatar, Card} from 'antd';

export const DrinkCard = ({drink}) => {
  console.log('drink', drink);
  return (
    <Card>
      <Card.Meta
        avatar={
          <Avatar src={drink.strDrinkThumb}/>
        }
        title={drink.strDrink}
      />
    </Card>
  );
}
