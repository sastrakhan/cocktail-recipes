import React, { useState } from 'react';
import { Dropdown, Menu, Tooltip } from 'antd';
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';

export const SortDrinks = ({ drinks, onSortHandler }) => {
  const [currentSort, setCurrentSort] = useState('');
  const [sortDirection, setSortDirection] = useState('Ascending');
  const allSortOptions = Object.keys(drinks[0]);

  const onSort = (event) => {
    const eventKey = event?.key;
    const sortOption = eventKey === currentSort ? `-${currentSort}` : eventKey;
    setCurrentSort(sortOption);
    setSortDirection(eventKey === currentSort ? 'Descending' : 'Ascending');
    onSortHandler({
      ordering: sortOption,
    });
  };

  const menu = (
    <Menu onClick={onSort}>
      {
        allSortOptions.map((option) => (
          <Menu.Item key={option}>
            {option}
          </Menu.Item>
        ))
      }
    </Menu>
  );

  return (
    <Dropdown.Button
      overlay={menu}
      icon={sortDirection === 'Ascending' ? <SortAscendingOutlined/> : <SortDescendingOutlined/>}
      buttonsRender={([leftButton, rightButton]) => [
        <Tooltip title="Click item once to sort ASC, click again to sort DESC" key="leftButton">
          {leftButton}
        </Tooltip>,
        React.cloneElement(rightButton),
      ]}
    >
      Sort by {currentSort} {sortDirection}
    </Dropdown.Button>
  );
};
