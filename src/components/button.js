import styled from "styled-components"

const Btn = styled.button`
  background: transparent;
  border: 1px solid black;
  padding: 12px 20px;
  font-family: "Playfair Display", sans-serif;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  display: inline-block;
  &:hover {
    background: black;
    color: white;
  }
`

export default Btn
