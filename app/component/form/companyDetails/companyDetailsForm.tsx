import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const CompanyDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Şirkət Təfərrüatları (Kimə)</p>
    <CustomTextInput
      label="Email"
      placeholder="name@example.com"
      variableName="email"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      Şirkəti tapsaq, faktura təfərrüatlarını avtomatik dolduracağıq.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Faktura təfərrüatları</p>
    <CustomTextInput
      label="Şirkət adı"
      placeholder="AZFAKTURA"
      variableName="companyName"
    />
    <ImageInput label="Logo" variableName="companyLogo" />
    <CustomTextInput
      label="Məkan"
      placeholder=""
      variableName="companyAddress"
    />
    <CustomTextInput
      label="Şəhər"
      placeholder=""
      variableName="companyCity"
    />
    <CustomNumberInput
      label="Zip"
      placeholder=""
      variableName="companyZip"
    />
    <CustomTextInput
      label="Ölkə"
      placeholder=""
      variableName="companyCountry"
    />
    <CustomTextInput
      label="VÖEN"
      placeholder=""
      variableName="companyTaxId"
    />
  </div>
);
