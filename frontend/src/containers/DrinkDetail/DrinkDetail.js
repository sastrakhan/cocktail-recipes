import React from 'react';
import { Descriptions, Image, Tag } from 'antd';
import { ListItems } from '../../components/ListItems/ListItems';

export const DrinkDetail = ({ location }) => {
  const { drink } = location.state;

  return (
    <Descriptions title="Drink Info" layout="vertical" bordered>
      <Descriptions.Item label="Drink">
        {drink?.strDrink}
      </Descriptions.Item>
      <Descriptions.Item label="Category">{drink?.strCategory}</Descriptions.Item>
      <Descriptions.Item label="Alcoholic">{drink?.strAlcoholic === 'Alcoholic' ? 'Yes' : 'No'}</Descriptions.Item>
      <Descriptions.Item label="Image">
        <Image
          width={200}
          src={drink?.strDrinkThumb}
        />
      </Descriptions.Item>
      <Descriptions.Item label="Instructions" span={2}>{drink?.strInstructions}</Descriptions.Item>
      <Descriptions.Item label="Ingredients">
        <ul>
          <ListItems items={drink} filterKey="strIngredient"/>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Measurements">
        <ul>
          <ListItems items={drink} filterKey="strMeasure"/>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Date Modified">{drink?.dateModified}</Descriptions.Item>
      {
        drink?.strTags?.length ?
          <Descriptions.Item label="Tags" span={3}>
            {
              drink?.strTags?.split(',')?.map((tag) => (
                <Tag>{tag}</Tag>
              ))
            }
          </Descriptions.Item> : null
      }
    </Descriptions>
  );
};
