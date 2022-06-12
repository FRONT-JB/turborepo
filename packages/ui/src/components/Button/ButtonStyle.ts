import styled from '@emotion/styled'

export const ButtonWrapper = styled.button`
  background: ${({ theme }) => theme.colors.black};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.radius_5};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  outline: 0;
  cursor: pointer;
`
