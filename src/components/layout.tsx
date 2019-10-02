import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "emotion-theming"
import theme from "../themes/default"
import GlobalStyles from "./styled/global"
import Header from "./header"
import { Box } from "rebass"

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Box sx={{ maxWidth: "960px", pt: 0, px: 1, pb: 2, m: "auto" }}>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Layout
