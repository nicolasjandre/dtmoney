import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 calc(1rem + 5%);
  margin-top: -4.25rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 8.5rem;
  width: 32%;
  max-width: 26rem;
  
  border-radius: 5px;
  background-color: ${({theme}) => theme.COLORS.WHITE};

  text-align: center;
  
  strong {
    max-width: 100%;
    font-size: 2.2rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.TITLE};
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  &:last-child {
      background-color: ${({theme}) => theme.COLORS.GREEN};
      
      strong, header {
        color: ${({theme}) => theme.COLORS.WHITE};
      }
    }

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 7% 10% 0;

    font-size: 1.3rem;
    color: ${({theme}) => theme.COLORS.TITLE};
  }

  @media (max-width: 1020px) {
    width: 48%;
    
    &:last-child {
      margin: auto;
    }

    @media (max-width: 519px) {
      display: none;
    }
  }
`