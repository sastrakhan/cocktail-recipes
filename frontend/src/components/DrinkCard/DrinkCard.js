import React from 'react';
import {Avatar, Card, Typography} from 'antd';
import { Link } from 'react-router-dom';

const { Text } = Typography;

export const DrinkCard = ({drink}) => {
  const drinkDetailLink = (
    <Link to={{pathname: `/drink/${drink?.id}`}}>
      More Details
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
          <Avatar src={drink?.image}/>
        }
        title={drink?.name}
        description={<><Text strong>Category:</Text> {drink?.category_name}</>}
      />
    </Card>
  );
};
