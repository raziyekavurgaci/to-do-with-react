import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
  width: 100%;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #888;
  font-style: italic;
`;

function TodoList({ todos, handleDelete }) {
  return (
    <StyledList>
      {todos.length === 0 ? (
        <EmptyMessage>Henüz hedef eklenmemiş</EmptyMessage>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            handleDelete={handleDelete}
          />
        ))
      )}
    </StyledList>
  );
}

export default TodoList;
