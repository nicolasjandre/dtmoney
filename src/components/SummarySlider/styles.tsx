import styled from "styled-components"

export const Container = styled.div`
  height: 19rem;
  width: 100%;

  display: none;
  gap: 1rem;
  margin-top: -5.45rem;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 78%;
    height: 100%;
  }

  @media (max-width: 519px) {
    display: flex;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  height: 100%;
  width: 100%;
  
  border-radius: 5px;
  background-color: ${({theme}) => theme.COLORS.WHITE};

  text-align: center;

  strong {
    max-width: 100%;
    font-size: calc(2.5rem + 1vw);
    font-weight: 400;
    padding-top: 4rem;
    color: ${({theme}) => theme.COLORS.TITLE};
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  header {
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;

    padding-top: 1.5rem;

    font-size: calc(2rem + .5vw);
    color: ${({theme}) => theme.COLORS.TITLE};
  }

  &.total-card {
      background-color: ${({theme}) => theme.COLORS.GREEN};
      
      strong, header {
        color: ${({theme}) => theme.COLORS.WHITE};
      }
    }
`