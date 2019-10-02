import React from "react"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"

const globalCSS = css`
  ${emotionNormalize}
`

export default () => <Global styles={globalCSS} />
