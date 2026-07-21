import { ChatbotLinksType, chatbotLinks } from "@/constants/chatbots";

export default function Footer() {
	return (
		<div className="flex flex-wrap gap-2 justify-center">
			{(Object.keys(chatbotLinks) as ChatbotLinksType).map((key) => (
				<a
					key={key}
					href={chatbotLinks[key]}
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-xl cursor-pointer border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 p-1 text-[10px] text-zinc-300 inline-block text-center"
				>
					{key}
				</a>
			))}
		</div>
	);
}
