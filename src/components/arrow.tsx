import { MoveDown, MoveUp } from "lucide-react";

type ArrowProps = {
  children: React.ReactNode;
  customClass?: string;
  reference?: string;
  direction: "up" | "down";
};

export default function Arrow({
  children,
  customClass,
  reference,
  direction,
}: ArrowProps) {
  return (
    <a
      href={reference}
      className={`hidden md:flex gap-1 cursor-pointer hover:underline ${customClass} text-[var(--purple)]`}
    >
      {direction === "up" ? <MoveUp /> : <MoveDown />}

      {children}
    </a>
  );
}
