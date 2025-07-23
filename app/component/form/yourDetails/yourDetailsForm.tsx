import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const YourDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Detallarınız (Kimdən)</p>
    <CustomTextInput
      label="Email"
      placeholder="name@example.com"
      variableName="yourEmail"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      Sizi tapsaq, faktura təfərrüatlarını avtomatik dolduracağıq.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Faktura təfərrüatları</p>
    <CustomTextInput
      label="Adınız"
      placeholder="-"
      variableName="yourName"
    />
    <ImageInput label="Logo" variableName="yourLogo" />
    <CustomTextInput
      label="Məkan"
      placeholder="-"
      variableName="yourAddress"
    />
    <CustomTextInput
      label="Şəhər"
      placeholder="-"
      variableName="yourCity"
    />
    <CustomNumberInput
      label="Zip"
      placeholder="-"
      variableName="yourZip"
    />
    <CustomTextInput
      label="Ölkə"
      placeholder="Azərbaycan"
      variableName="yourCountry"
    />
    <CustomTextInput
      label="VÖEN"
      placeholder="-"
      variableName="yourTaxId"
    />
  </div>
);
