import styled, { CreateStyled } from "@emotion/styled"
import defaultTheme from "@src/themes/default"

type Theme = typeof defaultTheme

export default styled as CreateStyled<Theme>
