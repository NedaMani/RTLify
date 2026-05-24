import { useEffect, useState } from "react";

import Icon from "@/components/Icon";

export default function RTLSwitch() {
  const [enabled, setEnabled] = useState(true);

  const handleChange = (checked: boolean) => {
    setEnabled(checked);

    chrome.storage.sync.set({
      deepseekRTL: checked,
    });
  };

  useEffect(() => {
    chrome.storage.sync.get(["deepseekRTL"], (result) => {
      if (typeof result.deepseekRTL === "boolean") {
        setEnabled(result.deepseekRTL);
      }
    });
  }, []);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3">
          <div className="mt-0.5 rounded-xl bg-zinc-800 p-4">
            <Icon iconName="RTL" />
          </div>

          <div>
            <h2 className="text-sm font-medium">RTL Mode</h2>

            <p className="mt-1 text-xs leading-relaxed text-zinc-400">
              Make prompts and AI responses render in right-to-left layout.
            </p>
          </div>
        </div>

        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={enabled}
            onChange={(e) => handleChange(e.target.checked)}
          />

          <div className="h-6 w-11 rounded-full bg-zinc-700 transition peer-checked:bg-white" />

          <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-zinc-950 transition-all peer-checked:translate-x-5" />
        </label>
      </div>
    </div>
  );
}
