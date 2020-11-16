import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  display: inline-block;
  padding: 10px 40px;
  font-weight: 300;
  text-decoration: none;
  border-radius: 15px;
  transition: all 0.2s;

  ${({ theme }) => theme.hoverable`
    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.color.primaryDark};
      box-shadow: 0 1rem 2rem ${({ theme }) => theme.color.blackOpLevel2};
      transform: translateY(-2px);
    }
  `}
`;

export const ButtonFull = styled(Button)`
  background-color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.hoverable`
    &:hover,
    &:active {
      border: 1px solid ${({ theme }) => theme.color.primaryDark};
    }
  `}
`;

export const ButtonGhost = styled(Button)`
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};

  ${({ theme }) => theme.hoverable`
    &:hover,
    &:active {
      border: 1px solid ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.white};
    }
  `}
`;
