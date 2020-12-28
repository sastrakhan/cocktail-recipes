import React, { useEffect, useState } from 'react';
import { Checkbox, Dropdown, Menu } from 'antd';
import { FilterOutlined, LoadingOutlined } from '@ant-design/icons';

export const FilterDrinks = ({ categories, loading, onFilterHandler }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);

  const onFilter = (id) => {
    setSelectedCategory((prevState) => {
      if (prevState.includes(id)) {
        return selectedCategory.filter(category => category !== id)
      } else {
        return [...selectedCategory, id]
      }
    });
  };

  useEffect(() => {
    if (selectedCategory.length) {
      onFilterHandler({
        category: selectedCategory.join(',')
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory])

  const menu = (
    <Menu>
      {
        categories.map(({ id, name }) => (
          <Menu.Item key={id}>
            <Checkbox onChange={() => onFilter(id)}>
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
