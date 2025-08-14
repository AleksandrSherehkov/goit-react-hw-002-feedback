import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  border: ${({ theme }) => theme.borders.none};
  cursor: pointer;
  outline: none;
  background-color: ${({ theme }) => theme.colors.button};
  padding: 10px 20px;

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.normal};
  transition: all ease 0.1s;
  box-shadow: ${({ theme }) => theme.shadows.button};

  &:active {
    transform: translateY(5px);
    box-shadow: ${({ theme }) => theme.shadows.button};
  }
  ${({ $reset }) =>
    $reset &&
    css`
      background-color: ${({ theme }) => theme.colors.muted || '#ccc'};
      color: ${({ theme }) => theme.colors.black || '#333'};
      font-size: ${({ theme }) => theme.fontSizes.s};
      padding: 6px 12px;
      box-shadow: none;

      &:hover {
        background-color: ${({ theme }) => theme.colors.lightGray || '#bbb'};
      }
    `}
`;
