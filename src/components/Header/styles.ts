import styled from "styled-components";

export const Container = styled.header`
  height: 13rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem calc(1rem + 5%) 8rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_TOP};

  @media (max-width: 519px) {
    height: 25rem;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3rem;

    padding: 1rem 0 0 0;

    img {
      width: 22rem;
    }
  }
`
export const Button = styled.button`
  height: 3.5rem;
  width: 13rem;
  border: none;
  border-radius: .3rem;
  font-size: calc(1rem + 3px);
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.BLUE_LIGHT};

  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }
`