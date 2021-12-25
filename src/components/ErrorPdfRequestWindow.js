import React from "react"
import { css } from "@emotion/react"

import {
  OrangeVector,
  Wrapper,
  Info,
  InfoTopWhiteBlock,
  H2,
} from "./SuccessEstimateWindow"

export const ErrorPdfRequestWindow = () => {
  return (
    <Wrapper
      css={css`
        margin: 50px 0 !important;
      `}
    >
      <Info
        css={css`
          height: 160px;
        `}
      >
        <InfoTopWhiteBlock>
          <H2>Sorry, some error occured</H2>
        </InfoTopWhiteBlock>
      </Info>
      <OrangeVector />
    </Wrapper>
  )
}
