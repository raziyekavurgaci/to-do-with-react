import React from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(248, 248, 8);
  padding: 12px 15px;
  border-radius: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    background-color: #e6f0ff;
    transform: translateY(-2px);
  }
`;

const TodoText = styled.span`
  font-size: 1rem;
  color: #333;
`;

const DeleteButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff5252;
  }
`;

function TodoItem({ todo, index, handleDelete }) {
  return (
    <StyledListItem>
      <TodoText>{todo}</TodoText>
      <DeleteButton
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(index);
        }}
      >
        Sil
      </DeleteButton>
    </StyledListItem>
  );
}

export default TodoItem;
