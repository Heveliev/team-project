import React from 'react';
import { filterText } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

import { FilterBox } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterBox>
      <input
        type="text"
        onChange={event => dispatch(filterText(event.target.value))}
      />
    </FilterBox>
  );
};

export default Filter;
