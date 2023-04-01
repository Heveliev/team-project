import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
  TodosList,
} from 'components';
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
