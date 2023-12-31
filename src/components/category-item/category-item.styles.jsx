import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid black;
  margin: 0 7.5px 15px;
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  &:hover {
    cursor: pointer;
    & .background-image{
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .card--text{
      opacity: 0.9;
    }
  }
  
  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`
export const BackgroundImageContainer = styled.div`
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;


export const CardText = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`

export const H2 = styled.h2`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`

export const Paragraph = styled.p`
  font-weight: lighter;
  font-size: 16px;
  
`
