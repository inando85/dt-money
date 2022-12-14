import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: none;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 1px solid ${({ theme }) => theme['green-300']};
    padding: 1rem;
    background-color: transparent;
    color: ${({ theme }) => theme['green-300']};
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;

    &:not(:disabled):hover {
      border: 1px solid ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme['green-500']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`
