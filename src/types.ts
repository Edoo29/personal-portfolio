export type TechnologyItemProps = {
  src: string;
  alt: string;
  href: string;
};

export type Image = {
  src: string;
  alt: string;
  href: string;
};

export type ArrowProps = {
  children: React.ReactNode;
  customClass?: string;
  reference: string;
  direction: "up" | "down";
};

export type LoadAnimationProps = {
  children: React.ReactNode;
  delay?: number;
};

export type NavbarItems = {
  label: string;
  href: string;
};

export type ToggleProps = {
  language: string;
  customClass?: string;
  customOnClick: () => void;
};

export type CardProps = {
  title: string;
  description: React.ReactNode;
  imagePath: string;
  link: string;
};

export type TranslateProps = {
  text: string;
  customClass?: string;
};

export type ImagePreviewProps = {
  src: string;
  alt: string;
};
