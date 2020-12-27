import React from 'react';
import { Descriptions, Image, Tag } from 'antd';
import { ListItems } from '../ListItems/ListItems';

export const DrinkDescription = ({drink}) => (
  <Descriptions title="Drink Info" layout="vertical" bordered>
    <Descriptions.Item label="Drink">
      {drink?.name}
    </Descriptions.Item>
    <Descriptions.Item label="Category">{drink?.category?.name}</Descriptions.Item>
    <Descriptions.Item label="Alcoholic">{drink?.alcoholic === 'Alcoholic' ? 'Yes' : 'No'}</Descriptions.Item>
    <Descriptions.Item label="Image">
      <Image
        width={200}
        src={drink?.image}
      />
    </Descriptions.Item>
    <Descriptions.Item label="Instructions" span={2}>{drink?.instructions}</Descriptions.Item>
    <Descriptions.Item label="Ingredients">
      <ul>
        <ListItems items={drink} filterKey="ingredient"/>
      </ul>
    </Descriptions.Item>
    <Descriptions.Item label="Measurements">
      <ul>
        <ListItems items={drink} filterKey="measure"/>
      </ul>
    </Descriptions.Item>
    <Descriptions.Item label="Date Modified">{drink?.date_modified}</Descriptions.Item>
    {
      drink?.tags?.length ?
        <Descriptions.Item label="Tags" span={3}>
          {
            drink?.tags?.split(',')?.map((tag) => (
              <Tag>{tag}</Tag>
            ))
          }
        </Descriptions.Item> : null
    }
  </Descriptions>
);
