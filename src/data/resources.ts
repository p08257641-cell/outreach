export type ResourceType = "study-guide" | "video" | "presentation" | "activity";

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  url: string;
  featured?: boolean;
}

export const resourceTypeLabels: Record<ResourceType, string> = {
  "study-guide": "Study Guide",
  video: "Video",
  presentation: "Presentation",
  activity: "Activity",
};

export const resourceCategories = [
  { id: "all", label: "All Resources" },
  { id: "study-guide", label: "Study Guides" },
  { id: "video", label: "Videos" },
  { id: "presentation", label: "Presentations" },
  { id: "activity", label: "Activities" },
] as const;

export const resources: Resource[] = [
  {
    id: "purpose-study-guide",
    title: "Discovering Your Purpose",
    description:
      "A study guide exploring faith, calling, and gifts for young people seeking direction and meaning.",
    type: "study-guide",
    url: "#",
    featured: true,
  },
  {
    id: "faith-foundations",
    title: "Faith Foundations",
    description:
      "A foundational guide on the core principles of faith, hope, and spiritual growth.",
    type: "study-guide",
    url: "#",
  },
  {
    id: "assembly-message-series",
    title: "Assembly Message Series",
    description:
      "Recorded messages from our school assembly presentations, delivered to students across visited schools.",
    type: "video",
    url: "https://www.youtube.com/@ephesusgatheringsworldwide",
    featured: true,
  },
  {
    id: "lunch-learn-topics",
    title: "Lunch & Learn Discussion Topics",
    description:
      "A collection of discussion topics and prompts used in our lunch and learn sessions.",
    type: "activity",
    url: "#",
  },
  {
    id: "leadership-presentation",
    title: "Youth Leadership Presentation",
    description:
      "A presentation on leadership, character, and service designed for after-school club members.",
    type: "presentation",
    url: "#",
  },
  {
    id: "mentorship-activity-pack",
    title: "Mentorship Activity Pack",
    description:
      "Activities and exercises for mentors and students to build trust, purpose, and community.",
    type: "activity",
    url: "#",
  },
];
