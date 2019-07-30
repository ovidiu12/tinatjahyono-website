import React from "react"
import styled from "styled-components"

const Root = styled.div`
  max-width: 940px;
  width: 100%;
  margin: 0 auto;
  padding: 0
    ${props => props.theme.utils.em(props.theme.sizes.grid.gutterWidth / 2)};
  ${props => props.theme.mq({ from: "md", until: "lg" })`
    padding: 0 ${props.theme.utils.em(props.theme.sizes.grid.gutterWidth)};
  `}
  ${props => props.theme.mq({ until: "md" })`
    padding: 0 ${props.theme.utils.em("20px")};
    padding: ${props => props.noPadding && "0"} !important;
  `}
`

export default ({ style, children, noPadding }) => (
  <Root noPadding={noPadding} style={style}>
    {children}
  </Root>
)
