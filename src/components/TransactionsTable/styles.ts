import styled from "styled-components";

interface TrProps {
  isDeposit: string
}

export const Table = styled.table`
  width: 100%;
  padding: 0 calc(1rem + 5%);
  margin-top: 1rem;
  border-spacing: 0 0.65rem;

  font-size: 1.2rem;
  color: ${({theme}) => theme.COLORS.TEXT};
  
  th {
    font-weight: 400;
    padding: 1rem 2rem;
  }

  tbody {
    height: 4.25rem;
    background-color: ${({theme}) => theme.COLORS.WHITE};
  }

  @media (max-width: 685px) {
    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }
`

export const Tr = styled.tr<TrProps>`
  position: relative;

  td {
      font-weight: 400;
      padding: 1rem 2rem;
    }

  td {
    &:first-child {
      color: ${({theme}) => theme.COLORS.TITLE};
      border-radius: 5px 0 0 5px;
    }

    &:nth-child(2) {
      color: ${({isDeposit, theme}) => isDeposit == 'deposit' ? theme.COLORS.GREEN : theme.COLORS.RED};
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }

  @media (max-width: 685px) {
    display: block;

    td {
      display: block;
      font-size: 1.4rem;
      text-align: right;

      &::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
        padding-right: 1rem;
      }

      &:first-child {
        border-radius: 5px 5px 0 0;
      }

      &:last-child {
        border-radius: 0;
        border-bottom: 1rem solid ${({theme}) => theme.COLORS.BACKGROUND_BOTTOM};
      }
    }
  }
`