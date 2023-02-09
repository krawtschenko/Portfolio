import styled from "styled-components";
import {Link} from "react-router-dom";

export const Button = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  padding: 12px 35px;
  color: #ffffff;
  border-radius: 40px;
  border: none;
  display: inline-block;
  white-space: nowrap;
  background: var(--skin-color);
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`