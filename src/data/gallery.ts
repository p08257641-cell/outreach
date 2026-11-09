
export const gallerySchools = [
  "Accra Academy",
  "Temasco",
  "Ghanata",
  "Labone",
] as const;

export const galleryYears = [
  2023,
  2024,
  2025,
  2026,
  2027,
] as const;

export type GallerySchool =
  (typeof gallerySchools)[number];

export type GalleryYear =
  (typeof galleryYears)[number];

export type GalleryPhoto = {
  id: string;
  src: string;
  school: GallerySchool;
  year: GalleryYear;
  alt: string;
};

// Compatibility with legacy gallery components.
export type GalleryImage = GalleryPhoto;

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "1",
    src: "/gallery/1.png",
    school: "Accra Academy",
    year: 2025,
    alt: "Ephesus School Outreach at Accra Academy",
  },
  {
    id: "2",
    src: "/gallery/2.png",
    school: "Accra Academy",
    year: 2025,
    alt: "Students during the Accra Academy outreach",
  },
  {
    id: "3",
    src: "/gallery/3.png",
    school: "Temasco",
    year: 2024,
    alt: "Ephesus School Outreach at Temasco",
  },
  {
    id: "4",
    src: "/gallery/4.png",
    school: "Ghanata",
    year: 2026,
    alt: "Ephesus School Outreach at Ghanata",
  },
  {
    id: "5",
    src: "/gallery/5.png",
    school: "Labone",
    year: 2025,
    alt: "Ephesus School Outreach at Labone",
  },
    {
    id: "6",
    src: "/gallery/6.png",
    school: "Labone",
    year: 2025,
    alt: "Ephesus School Outreach at Labone",
  },
    {
    id: "7",
    src: "/gallery/7.png",
    school: "Labone",
    year: 2025,
    alt: "Ephesus School Outreach at Labone",
  },
    {
    id: "8",
    src: "/gallery/8.png",
    school: "Labone",
    year: 2025,
    alt: "Ephesus School Outreach at Labone",
  },
    {
    id: "9",
    src: "/gallery/9.png",
    school: "Labone",
    year: 2025,
    alt: "Ephesus School Outreach at Labone",
  },
    {
    id: "10",
    src: "/gallery/10.png",
    school: "Labone",
    year: 2025,
    alt: "Ephesus School Outreach at Labone",
  },
    {
    id: "11",
    src: "/gallery/11.png",
    school: "Labone",
    year: 2025,
    alt: "Ephesus School Outreach at Labone",
  },
];
