import React, { useEffect, useState } from 'react';
import { Dropdown, Menu, Tooltip } from 'antd';
import { LoadingOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';

const DEFAULT_SORT_COL = 'name';
const DEFAULT_SORT_DIR = 'Ascending';

export const SortDrinks = ({ drinks, loading, onSortHandler, reset }) => {
  const [currentSort, setCurrentSort] = useState(DEFAULT_SORT_COL);
  const [sortDirection, setSortDirection] = useState(DEFAULT_SORT_DIR);
  const [sortOptions, setSortOptions] = useState([]);

  const onSort = (event) => {
    const eventKey = event?.key;
    const sortOption = eventKey === currentSort ? `-${currentSort}` : eventKey;
    setSortDirection(eventKey === currentSort ? 'Descending' : 'Ascending');
    setCurrentSort(sortOption);
    onSortHandler({
      ordering: sortOption,
    });
  };

  useEffect(() => {
    setCurrentSort(DEFAULT_SORT_COL);
    setSortDirection(DEFAULT_SORT_DIR);
  }, [reset]);

  useEffect(() => {
    if (drinks.length) {
      setSortOptions(Object.keys(drinks[0]));
    }
  }, [drinks])

  const menu = sortOptions.length && (
    <Menu onClick={onSort}>
      {
        sortOptions.map((option) => (
          <Menu.Item key={option}>
            {option}
          </Menu.Item>
        ))
      }
    </Menu>
  );

  let icon;
  if (loading) {
    icon = <LoadingOutlined/>;
  } else if(sortDirection === 'Ascending') {
    icon = <SortAscendingOutlined/>;
  } else {
    icon = <SortDescendingOutlined/>
  }

  return (
    <Dropdown.Button
      overlay={menu}
      icon={icon}
      buttonsRender={([leftButton, rightButton]) => [
        <Tooltip title="Click item once to sort ASC, click again to sort DESC" key="leftButton">
          {leftButton}
        </Tooltip>,
        React.cloneElement(rightButton),
      ]}
      disabled={loading}
    >
      Sort by {currentSort} {sortDirection}
    </Dropdown.Button>
  );
};
