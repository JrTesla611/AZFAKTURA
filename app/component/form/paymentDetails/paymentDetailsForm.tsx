import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Ödəniş təfərrüatları</p>
    <CustomTextInput
      label="Bank Adı"
      placeholder="-"
      variableName="bankName"
    />
    <CustomTextInput
      label="Hesab nömrəsi"
      placeholder="----------"
      variableName="accountNumber"
    />
    <CustomTextInput
      label="Hesab Adı"
      placeholder="-"
      variableName="accountName"
    />
    <CustomTextInput
      label="VÖEN kodu"
      placeholder="-"
      variableName="ifscCode"
    />
    <CustomTextInput
      label="IBAN"
      placeholder="---- ---- ---- ----"
      variableName="routingCode"
    />
    <CustomNumberInput
      label="Swift Kodu"
      placeholder="-"
      variableName="swiftCode"
    />
  </div>
);
