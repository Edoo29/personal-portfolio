import { Copyright } from "lucide-react";

function CopyrightBanner() {
  return (
    <div className="w-full p-3 flex items-center justify-center gap-3 bg-black">
      <Copyright className="text-[var(--color-shadows)]" />
      <p className="text-[var(--color-shadows)]">
        2025 Edoardo Zaffaroni - All rights reserved
      </p>
    </div>
  );
}

export default CopyrightBanner;
