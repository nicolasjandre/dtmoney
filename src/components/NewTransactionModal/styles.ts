import styled from "styled-components";
import { darken, transparentize } from "polished";

interface RadioBoxProps {
  isActive: boolean
}

export const Container = styled.form`
  h2 {
    font-size: 1.75rem;
    margin-bottom: 2.25rem;
    color: ${({theme}) => theme.COLORS.TITLE};
  }

  input {
    width: 100%;
    height: 4.25rem;

    padding: 0 1.75rem;
    border: 1px solid ${({theme}) => theme.COLORS.INPUT_BACKGROUND};
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.INPUT_BORDER};

    font-weight: 400;
    font-size: 1rem;
    

    &::placeholder {
      color: ${({theme}) => theme.COLORS.TEXT};
    }

    &:focus {
      outline: 1px solid rgb(0, 0, 0, 0.4);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.75rem;
    margin-top: 1.5rem;

    border: none;
    border-radius: 5px;

    font-size: 1.2rem;
    font-weight: 600;
    color: ${({theme}) => theme.COLORS.WHITE};

    background-color: ${({theme}) => theme.COLORS.GREEN};

    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .8rem;
`

export const RadioBox = styled.button<RadioBoxProps>`
  width: 100%;
  height: 4rem;

  border: 1px solid ${({theme}) => theme.COLORS.INPUT_BORDER};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color .2s;

  &:first-child {
    background: ${({isActive, theme}) => isActive ? `${transparentize(0.85, theme.COLORS.GREEN)}` : `transparent` };
  }

  &:nth-child(2) {
    background: ${({isActive, theme}) => isActive ? `${transparentize(0.85, theme.COLORS.RED)}` : `transparent` };
  }

  &:hover {
    border-color: ${darken(0.25, '#D7D7D7')};
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${({theme}) => theme.COLORS.TITLE};
  }  
`