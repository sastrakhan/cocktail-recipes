import React from 'react';
import { Checkbox, Dropdown, Menu } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

export const FilterDrinks = ({ drinks, onFilterHandler }) => {
  const allCategories = drinks.map(({ strCategory }) => strCategory);
  const uniqueCategories = [...new Set(allCategories)];

  const onFilter = (event) => {
    onFilterHandler({
      strCategory: event?.target?.value,
    });
  };

  const menu = (
    <Menu>
      {
        uniqueCategories.map((category, index) => (
          <Menu.Item key={index}>
            <Checkbox onChange={onFilter} value={category}>{category}</Checkbox>
          </Menu.Item>
        ))
      }
    </Menu>
  );

  return (
    <Dropdown.Button overlay={menu} icon={<FilterOutlined/>}>
      Filter by Category
    </Dropdown.Button>
  );
};
