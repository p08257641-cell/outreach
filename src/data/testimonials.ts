export interface Testimonial {
  id: string;
  name: string;
  context: string;
  quote: string;
  category?: string;
}

export const testimonyCategories = [
  { id: "all", label: "All Testimonies" },
  { id: "student", label: "Student Stories" },
  { id: "volunteer", label: "Volunteer Stories" },
] as const;

export const testimonials: Testimonial[] = [
  {
    id: "sarah-nhyira-duncan",
    name: "Sarah Nhyira Duncan",
    context: "Labone SHS",
    quote:
      "The Ephesus team came to our school and their visit changed how I see myself. For the first time I understood that my life has purpose and that God has a plan for me. I am not the same person I was before they came.",
    category: "student",
  },
];

export const featuredTestimony = testimonials[0];
