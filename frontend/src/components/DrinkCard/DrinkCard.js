import { MoreOutlined } from '@ant-design/icons';
import React from 'react';
import {Avatar, Card} from 'antd';
import { Link } from 'react-router-dom';

export const DrinkCard = ({drink}) => {
  const drinkDetailLink = (
    <Link
      to={{
        pathname: `/drink/${drink?.idDrink}`,
        state: { drink }
      }}
    >
      <MoreOutlined key="more" /> More Details
    </Link>
  );

  return (
    <Card
      actions={[
        drinkDetailLink
      ]}
      hoverable
    >
      <Card.Meta
        avatar={
          <Avatar src={drink?.strDrinkThumb}/>
        }
        title={drink?.strDrink}
      />
    </Card>
  );
};
