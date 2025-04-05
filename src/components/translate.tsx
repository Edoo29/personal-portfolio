import { useTranslation } from "react-i18next";

type TranslateProps = {
  text: string;
  customClass?: string;
};

function Translate({ text, customClass }: TranslateProps) {
  const { t } = useTranslation();

  return <span className={customClass}>{t(text)}</span>;
}

export default Translate;
