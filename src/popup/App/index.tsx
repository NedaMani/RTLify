import FontSelector from "@/components/FontSelector";
import Footer from "@/components/PopupFooter";
import Header from "@/components/PopupHeader";
import RTLSwitch from "@/components/RTLSwitch";

export default function App() {
	return (
		<div className="w-95 bg-zinc-950 text-zinc-100 select-none">
			<div className="border-b border-zinc-800 px-5 py-4">
				<Header />
			</div>

			<div className="space-y-3 px-5 py-2">
				<RTLSwitch />
				<FontSelector />
				<Footer />
			</div>
		</div>
	);
}
