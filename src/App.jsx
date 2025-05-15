import styled from "styled-components";
import { Container } from "react-bootstrap";
import TodoForm from "./components/TodoForm";

const Wrapper = styled.div`
  background-color: #f0f7ff;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled(Container)`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #3a86ff;
  margin-bottom: 2rem;
  text-align: center;
`;

function App() {
  return (
    <Wrapper>
      <StyledContainer>
        <Title>Yapılacaklar Listesi</Title>
        <TodoForm />
      </StyledContainer>
    </Wrapper>
  );
}

export default App;
