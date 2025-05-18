import styled from "styled-components";

const LI = styled.li`
  background-color: #e1ffc7;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 5px 0;
  max-width: 70%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  list-style-type: none;
`;

const Span = styled.span`
  display: block;
  text-align: right;
  font-size: 12px;
  color: #999;
  margin-top: 5px;
`;

export default function ChatItem({ title, date }) {
  return (
    <LI>
      {title} <Span>{date}</Span>
    </LI>
  );
}
