import { Descriptions, Tag } from 'antd';
import React from 'react';

export const DrinkDetail = ({location}) => {
  const { drink } = location.state

  return (
    <Descriptions title="Drink Info" layout="vertical" bordered>
      <Descriptions.Item label="Name">{drink?.strDrink}</Descriptions.Item>
      <Descriptions.Item label="Category">{drink?.strCategory}</Descriptions.Item>
      <Descriptions.Item label="Alcoholic">{drink?.strAlcoholic === "Alcoholic" ? "Yes" : "No"}</Descriptions.Item>
      <Descriptions.Item label="Instructions" span={3}>{drink?.strInstructions}</Descriptions.Item>
      <Descriptions.Item label="Ingredients">
        <ul>
          {
            Object.keys(drink).map((drinkKey) => {
              if (drinkKey.includes('strIngredient') && drink[drinkKey]) {
                return (
                  <li key={drinkKey}>{drink[drinkKey]}</li>
                )
              }
              return null;
            })
          }
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Measurements">
        <ul>
          {
            Object.keys(drink).map((drinkKey) => {
              if (drinkKey.includes('strMeasure') && drink[drinkKey]) {
                return (
                  <li key={drinkKey}>{drink[drinkKey]}</li>
                )
              }
              return null;
            })
          }
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
