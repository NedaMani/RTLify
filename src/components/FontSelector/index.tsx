import Icon from "@/components/Icon";
import { useEffect, useState } from "react";

export default function FontSelector() {
	const [enabled, setEnabled] = useState(true);
	const [font, setFont] = useState("Vazirmatn");

	const selectChange = (selectedFont: string) => {
		setFont(selectedFont);

		chrome.storage.sync.set({
			chatFontFamily: selectedFont,
		});
	};

	const checkboxChange = (checked: boolean) => {
		setEnabled(checked);

		chrome.storage.sync.set({
			chatFontEnabled: checked,
		});
	};

	useEffect(() => {
		chrome.storage.sync.get(["chatFontFamily", "chatFontEnabled"], (result) => {
			if (result.chatFontFamily) setFont(result.chatFontFamily);
			if (typeof result.chatFontEnabled === "boolean") {
				setEnabled(result.chatFontEnabled);
			}
		});
	}, []);

	return (
		<section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
			<div className="flex items-start gap-3">
				<div className="mt-0.5 rounded-xl bg-zinc-800 p-4">
					<Icon iconName="Font" />
				</div>

				<div className="w-full">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-sm font-medium">Chat Font</h2>

							<p className="mt-1 text-xs text-zinc-400">Custom font for chatbots.</p>
						</div>

						<label className="relative inline-flex cursor-pointer items-center">
							<input
								type="checkbox"
								className="peer sr-only"
								checked={enabled}
								onChange={(e) => checkboxChange(e.target.checked)}
							/>

							<div className="h-6 w-11 rounded-full bg-zinc-700 transition peer-checked:bg-white" />

							<div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-zinc-950 transition-all peer-checked:translate-x-5" />
						</label>
					</div>

					<div className="mt-4">
						<select
							value={font}
							onChange={(e) => selectChange(e.target.value)}
							className="w-full cursor-pointer rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-3 text-sm text-zinc-200 outline-none transition focus:border-zinc-500"
						>
							<option>Vazirmatn</option>
							<option>Arad</option>
							<option>Sahel</option>
						</select>
					</div>
				</div>
			</div>
		</section>
	);
}
