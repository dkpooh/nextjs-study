import styled from "@emotion/styled";

export const AlertStyled = styled.div`
  color: ${props => props.type === 'success' ? 'blue' : 'red'}
`