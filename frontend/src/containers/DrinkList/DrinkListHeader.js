import React from 'react';
import { Button, Col, Row } from 'antd';
import { FilterDrinks } from '../../components/FilterDrinks/FilterDrinks';
import { SearchDrinks } from '../../components/SearchDrinks/SearchDrinks';
import { SortDrinks } from '../../components/SortDrinks/SortDrinks';

export const DrinkListHeader = ({
  categories,
  filteredDrinks,
  isLoading,
  getDrinksHandler,
  resetCount,
  resetHandler
}) => (
  <Row gutter={[16, 16]}>
    <Col md={9} lg={14}>
      <SearchDrinks
        loading={isLoading}
        onSearchHandler={getDrinksHandler}
        reset={resetCount}
      />
    </Col>
    <Col md={6} lg={3}>
      <FilterDrinks
        categories={categories}
        onFilterHandler={getDrinksHandler}
        loading={isLoading}
        reset={resetCount}
      />
    </Col>
    <Col md={6} lg={5}>
      <SortDrinks
        drinks={filteredDrinks}
        onSortHandler={getDrinksHandler}
        reset={resetCount}
        loading={isLoading}
      />
    </Col>
    <Col md={3} lg={2} style={{textAlign: 'right'}}>
      <Button
        onClick={resetHandler}
        loading={isLoading}
      >
        Reset Filters
      </Button>
    </Col>
  </Row>
);
