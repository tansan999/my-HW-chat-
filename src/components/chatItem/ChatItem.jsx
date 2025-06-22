import React from "react";
import styled from "styled-components";

export default function ChatItem({ message, onDelete, onToggleRead }) {
  return (
    <ItemContainer read={message.read}>
      <Info>
        <Title>{message.title}</Title>
        <Date>{message.date}</Date>
      </Info>
      <Actions>
        <label>
          <Checkbox
            type="checkbox"
            checked={!!message.read}
            onChange={onToggleRead}
          />
          Прочитано
        </label>
        <DeleteButton onClick={onDelete} title="Удалить">
          🗑️
        </DeleteButton>
      </Actions>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  background: ${(p) => (p.read ? "#e0ffe0" : "#ffe0e0")};
  border-radius: 8px;
  margin: 12px 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-size: 17px;
  margin-bottom: 6px;
`;

const Date = styled.div`
  font-size: 13px;
  color: #888;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Checkbox = styled.input`
  margin-right: 6px;
  accent-color: #52c41a;
  width: 18px;
  height: 18px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #ff4d4f;
  transition: color 0.2s;
  &:hover {
    color: #d9363e;
  }
`;
