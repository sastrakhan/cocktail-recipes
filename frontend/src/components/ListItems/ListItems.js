import React from 'react';

export const ListItems = ({ items, filterKey }) => (
  Object.keys(items).map((itemKey) => {
    if (itemKey.includes(filterKey) && items[itemKey]) {
      return (
        <li key={itemKey}>{items[itemKey]}</li>
      )
    }
    return null;
  })
);
