import { ExternalLink } from "lucide-react";

interface FormEmbedProps {
  src: string;
  title: string;
  height?: string;
}

export default function FormEmbed({ src, title, height = "640px" }: FormEmbedProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-cloud-dark">
      <div className="flex items-center justify-between border-b border-cloud-dark px-5 py-3">
        <p className="text-sm font-semibold text-navy-700">{title}</p>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-royal-600 transition hover:text-royal-700"
        >
          Open in new tab
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <iframe
        src={src}
        title={title}
        className="w-full"
        style={{ height, border: 0 }}
        loading="lazy"
      >
        <p className="p-6 text-ink-light">
          Your browser doesn't support embedded forms.{" "}
          <a href={src} target="_blank" rel="noopener noreferrer" className="text-royal-600 underline">
            Open the form here
          </a>
          .
        </p>
      </iframe>
    </div>
  );
}
