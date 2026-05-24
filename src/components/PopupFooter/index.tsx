import { chatbotLinks, ChatbotLinksType } from "@/constants/supportedUrls";

export default function Footer() {
  return (
    <div className="space-y-1.5">
      <h2 className="text-sm text-center font-medium">Supported Platforms</h2>

      <div className="flex flex-wrap gap-2 justify-center">
        {(Object.keys(chatbotLinks) as ChatbotLinksType).map((key) => (
          <a
            key={key}
            href={chatbotLinks[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl cursor-pointer border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 px-3 py-2 text-xs text-zinc-300 inline-block text-center"
          >
            {key}
          </a>
        ))}
      </div>
    </div>
  );
}
