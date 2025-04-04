import { useTranslation } from "react-i18next";

type TranslateProps = {
  text: string;
  customClass?: string;
};

function Translate({ text, customClass }: TranslateProps) {
  const { t } = useTranslation();

  return <div className={customClass}>{t(text)}</div>;
}

export default Translate;
