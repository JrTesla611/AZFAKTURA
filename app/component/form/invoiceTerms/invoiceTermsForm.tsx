"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import DateInput from "@/app/component/ui/dateInput";

export const InvoiceTermsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Faktura şərtləri</p>
    <CustomTextInput
      label="Faktura nömrəsi"
      placeholder="INVOICE-01"
      variableName="invoiceNo"
    />
    <DateInput label="Buraxılış tarixi" variableName="issueDate" />
    <DateInput label="Son tarix" variableName="dueDate" />
  </div>
);
