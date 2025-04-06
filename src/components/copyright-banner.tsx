import { Copyright } from "lucide-react";

function CopyrightBanner({ customClass }: { customClass?: string }) {
  return (
    <div
      className={`${customClass} w-full p-3 flex items-center justify-center gap-3 bg-black absolute z-50`}
    >
      <Copyright className="text-[var(--color-shadows)]" />
      <p className="text-[var(--color-shadows)]">
        2025 Edoardo Zaffaroni - All rights reserved
      </p>
    </div>
  );
}

export default CopyrightBanner;
