import React, { useState } from 'react';
import { Checkbox, Dropdown, Menu } from 'antd';
import { FilterOutlined, LoadingOutlined } from '@ant-design/icons';

export const FilterDrinks = ({ categories, loading, onFilterHandler }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const onFilter = (category) => {
    setSelectedCategory((prevState) => prevState === category ? '' : category);
    onFilterHandler({
      strCategory: selectedCategory === category ? '' : category,
    });
  };

  const menu = (
    <Menu>
      {
        categories.map(({ id, name }) => (
          <Menu.Item key={id}>
            <Checkbox
              onChange={() => onFilter(name)}
              disabled={selectedCategory.length && selectedCategory !== name}
            >
              {name}
            </Checkbox>
          </Menu.Item>
        ))
      }
    </Menu>
  );

  return (
    <Dropdown.Button overlay={menu} icon={loading ? <LoadingOutlined/> : <FilterOutlined/>}>
      Filter by Category
    </Dropdown.Button>
  );
};
