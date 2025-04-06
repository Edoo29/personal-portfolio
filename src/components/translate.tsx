import { useTranslation } from "react-i18next";
import { TranslateProps } from "../types";

export default function Translate({ text, customClass }: TranslateProps) {
  const { t } = useTranslation();

  return <span className={customClass}>{t(text)}</span>;
}
