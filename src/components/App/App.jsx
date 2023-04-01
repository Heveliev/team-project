import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
  TodosList,
} from 'components';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selects';

export const App = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          <Filter />

          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ) : (
            <TodosList />
          )}
        </Container>
      </Section>
    </>
  );
};
