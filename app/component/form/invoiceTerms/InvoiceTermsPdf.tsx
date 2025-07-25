import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { format } from "date-fns";
import { pdfTypography, pdfContainers, pdfUtils } from "@/lib/pdfStyles";

export const InvoiceTermsPdf: React.FC<InvoiceTerms> = ({
  invoiceNumber,
  issueDate,
  dueDate,
}) => (
  <View style={pdfContainers.invoiceTerms}>
    <View style={{ flex: 1 }}>
      <Text style={pdfTypography.title}>Faktura NO</Text>
      <Text style={pdfTypography.subTitle}>{invoiceNumber}</Text>
    </View>
    <View
      style={{
        ...pdfUtils.flexRowBetween,
        paddingRight: 20,
        paddingLeft: 100,
        flex: 1,
      }}
    >
      <View>
        <Text style={pdfTypography.title}>Buraxılmışdır</Text>
        <Text style={pdfTypography.subTitle}>
          {issueDate ? format(issueDate, "do MMM yyyy") : ""}
        </Text>
      </View>
      <View>
        <Text style={pdfTypography.title}>Son tarix</Text>
        <Text style={pdfTypography.subTitle}>
          {dueDate ? format(dueDate, "do MMM yyyy") : ""}
        </Text>
      </View>
    </View>
  </View>
);
