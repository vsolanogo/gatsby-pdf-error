import React, { useContext } from "react"
import { Document, Page, Text, View, Image } from "@react-pdf/renderer"

export const Pdf = ({ i1 }) => (
  <Document>
    <Page size="A4" wrap>
      <Image
        src={i1}
        allowDangerousPaths
        style={{ width: "34mm", height: "13mm" }}
      />
    </Page>
  </Document>
)
