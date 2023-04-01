import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { addTodo } from 'redux/todosSlice';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectTodos } from 'redux/selects';

export const SearchForm = () => {
  const todos = useSelector(selectTodos);

  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      text: query,
    };

    const normalizedQuery = query.toLowerCase().trim();

    const isExist = todos.find(
      item => item.text.toLowerCase() === normalizedQuery
    );

    if (isExist) {
      alert(`ToDo ${query} is alredy exist`);
      return;
    }

    dispatch(addTodo(todo));

    setQuery('');
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
