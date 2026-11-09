export interface EventItem {
  id: string;
  title: string;
  date: string; // ISO format
  endDate?: string;
  time?: string;
  location: string;
  category: "outreach" | "gathering" | "workshop" | "special";
  description: string;
  registrationUrl?: string;
  status: "upcoming" | "past";
}

export const events: EventItem[] = [
  {
    id: "sample-school-visit-2024",
    title: "School Outreach Visit — Labone SHS",
    date: "2024-06-14",
    time: "2:00 PM",
    location: "Labone SHS, Accra",
    category: "outreach",
    description:
      "An outreach visit featuring an assembly presentation, student testimonies, and a lunch and learn session with interested students.",
    status: "past",
  },
  {
    id: "sample-gathering-2024",
    title: "Ephesus Sunday Gathering",
    date: "2024-09-22",
    time: "3:00 PM",
    location: "Mikaddo Plaza, Labone Junction",
    category: "gathering",
    description:
      "Our weekly Sunday gathering for worship, teaching, fellowship, and encouragement.",
    status: "past",
  },
  {
    id: "sample-workshop-2024",
    title: "Youth Leadership Workshop",
    date: "2024-11-08",
    time: "10:00 AM",
    location: "Mikaddo Plaza, Labone Junction",
    category: "workshop",
    description:
      "A leadership development workshop for after-school club members focused on purpose, character, and service.",
    status: "past",
  },
];

export const eventCategories = [
  { id: "all", label: "All Events" },
  { id: "outreach", label: "Outreach" },
  { id: "gathering", label: "Gatherings" },
  { id: "workshop", label: "Workshops" },
  { id: "special", label: "Special Events" },
] as const;
