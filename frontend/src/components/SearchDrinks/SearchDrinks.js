import { Input } from 'antd';

const { Search } = Input;

export const SearchDrinks = ({ loading, onSearchHandler }) => {
  const onSearch = (value) => {
    onSearchHandler({
      search: value,
    });
  };

  return (
    <Search
      placeholder="Search drinks"
      allowClear
      onSearch={onSearch}
      loading={loading}
    />
  );
};
