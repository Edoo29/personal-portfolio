import { MoveDown, MoveUp } from "lucide-react";
import { ArrowProps } from "../types";

export default function Arrow({
  children,
  customClass,
  reference,
  direction,
}: ArrowProps) {
  return (
    <a
      href={reference}
      aria-label="Scroll to the next section"
      className={`hidden md:flex gap-1 cursor-pointer hover:underline ${customClass} text-[var(--purple)]`}
    >
      {direction === "up" ? <MoveUp /> : <MoveDown />}

      {children}
    </a>
  );
}
