import { Link } from "gatsby"
import React from "react"
import styled from "@src/lib/styled"
import { Box, Heading } from "rebass"

type Props = {
  siteTitle: string
}

const StyledHeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`

const Header: React.FC<Props> = ({ siteTitle }) => (
  <Box sx={{ bg: "rebeccapurple", mb: 3 }}>
    <Box sx={{ m: "auto", maxWidth: "960px", px: 3, py: 4 }}>
      <Heading as="h1" m="auto">
        <StyledHeaderLink to="/">{siteTitle}</StyledHeaderLink>
      </Heading>
    </Box>
  </Box>
)

export default Header
