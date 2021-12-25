import React, { useContext } from "react"
import {
  pdf,
  BlobProvider,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer"
import { graphql, StaticQuery } from "gatsby"
import { Pdf } from "./PdfViews"

const Controller = ({ data }) => {
  const i1 = data.i1.publicURL

  const docResult = <Pdf i1={i1} />

  const blob2 = pdf(docResult).toBlob()

  return (
    <div>
      <BlobProvider document={docResult}>
        {({ blob, url, loading, error }) => {
          console.log({ blob })
          return <div>There's something going on on the fly</div>
        }}
      </BlobProvider>
      <PDFViewer>{docResult}</PDFViewer>
      <PDFDownloadLink document={docResult} fileName="somename.pdf">
        {({ blob, url, loading, error }) => {
          console.log({ blob })
          console.log({ url })
          console.log({ error })

          return <div>{loading ? "Loading document..." : "Download now!"}</div>
        }}
      </PDFDownloadLink>
    </div>
  )
}

export const PdfCreator = (props) => (
  <StaticQuery
    query={graphql`
      query {
        i1: file(relativePath: { eq: "i1.jpg" }) {
          id
          name
          relativePath
          publicURL
        }
      }
    `}
    render={(data) => <Controller data={data} {...props} />}
  />
)
