import React, { useEffect, useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

export const SearchDrinks = ({ loading, onSearchHandler, reset }) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (value) => {
    onSearchHandler({
      search: value,
    });
  };

  useEffect(() => {
    setSearchValue("");
  }, [reset]);

  return (
    <Search
      placeholder="Search drinks"
      allowClear
      onSearch={onSearch}
      loading={loading}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};
