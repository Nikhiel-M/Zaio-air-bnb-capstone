import styled from "styled-components";

export const GuestUL = styled.ul`
  margin-top: 5px;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  position: absolute;
  width: 100%;
  z-index: 10;
`;

export const GuestLI = styled.li`
  padding: 10px;
  cursor: pointer;
  background: #f0f0f0;

  &:hover {
    background: #cdcdcdff;
  }
`;
export const GuestButton = styled.button`
  width: 100%;
  padding: 10px;
  cursor: pointer;
`;
