import styled from "styled-components";

export const StyledRow = styled.div`
  padding: 40px 10px;
  font-size: 28px;
  min-width: 300px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  }
`;

export const StyledButton = styled.button`
  background: #ff6961;
  border: 0;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 28px;
  cursor: pointer;
  color: white;
  font-weight: 500;
`;
