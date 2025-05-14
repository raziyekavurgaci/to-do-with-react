import styled from "styled-components";
import { Container } from "react-bootstrap";

import TodoForm from "./components/TodoForm";

const Wrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 2rem;
`;
function App() {
  return (
    <Wrapper>
      <Container>
        <Title>Yapılacaklar Listesi</Title>
        <TodoForm />
      </Container>
    </Wrapper>
  );
}

export default App;
