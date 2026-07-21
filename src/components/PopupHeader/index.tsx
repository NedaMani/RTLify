export default function Header() {
	return (
		<div className="flex items-center justify-between">
			<div>
				<h1 className="tracking-tight">
					<span className="text-lg font-extrabold inline-block bg-linear-to-r from-[#b5b5b5] via-white to-[#b5b5b5] bg-size-[200%_auto] bg-clip-text text-transparent animate-[shine_6s_linear_infinite]">
						RTLify
					</span>{" "}
					for Chatbots
				</h1>

				<p className="text-xs text-center leading-relaxed text-zinc-400">
					Made with Love •{" "}
					<a
						href="https://github.com/NedaMani/RTLify"
						target="_blank"
						rel="noreferrer"
						className="text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition hover:text-white"
					>
						Open Source
					</a>{" "}
					• Community-driven
				</p>
			</div>

			<div className="rounded-xl border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300">
				v{__APP_VERSION__}
			</div>
		</div>
	);
}
