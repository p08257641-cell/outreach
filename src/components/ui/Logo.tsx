import { Link } from "react-router-dom";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Ephesus Missions & Outreach home">
      <img
        src="/logo.png"
        alt="Ephesus Missions & Outreach"
        className="h-10 w-auto shrink-0"
        width={40}
        height={40}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <span
        className={`hidden font-heading text-lg font-bold leading-tight sm:block ${
          light ? "text-white" : "text-navy-800"
        }`}
      >
        Ephesus
        <span className={`block text-xs font-medium ${light ? "text-navy-200" : "text-ink-light"}`}>
          Missions & Outreach
        </span>
      </span>
    </Link>
  );
}
