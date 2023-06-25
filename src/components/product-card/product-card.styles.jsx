import styled from "styled-components";
import Button from "../button/button.component";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  margin: 1%;

  &:hover {
    cursor: pointer;

    & .image-container img {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .image-container button {
      opacity: 0.7;
    }
  }

`

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`


export const ImageContainer = styled.div`
  position: relative;
`
export const Image = styled.img`
  min-width: 300px;
  max-width: 300px;
  max-height: 350px;
  min-height: 350px;
`

export const ProductButton = styled(Button)`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
`


