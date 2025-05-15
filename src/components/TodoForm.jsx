import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import TodoList from "./TodoList";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFormGroup = styled(Form.Group)`
  width: 100%;
  max-width: 450px;
`;

const StyledLabel = styled(Form.Label)`
  font-weight: 600;
  color: #3a86ff;
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
`;

const StyledButton = styled(Button)`
  border-radius: 20px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

function TodoForm() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodo = (e) => {
    if (e) e.preventDefault();
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const handleDelete = (indexToRemove) => {
    const filteredTodos = todos.filter((_, i) => i !== indexToRemove);
    setTodos(filteredTodos);
  };

  return (
    <>
      <StyledForm onSubmit={addTodo}>
        <StyledFormGroup controlId="hedefInput">
          <StyledLabel>Hedef</StyledLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Bir hedef yaz..."
              value={todoInput}
              onChange={handleChange}
              style={{ borderRadius: "20px 0 0 20px" }}
            />
            <StyledButton variant="primary" type="submit">
              Ekle
            </StyledButton>
          </InputGroup>
        </StyledFormGroup>
      </StyledForm>

      <TodoList todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default TodoForm;
