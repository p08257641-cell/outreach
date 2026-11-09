export interface Program {
  id: string;
  name: string;
  tagline: string;
  description: string;
  audience: string;
  duration: string;
  features: string[];
  image: string;
  icon: "presentation" | "users" | "book-open" | "sparkles";
}

export const programs: Program[] = [
  {
    id: "assembly-presentations",
    name: "Assembly Presentations",
    tagline: "High-energy school presentations",
    description:
      "Dynamic school presentations featuring music, drama, inspiring messages, student testimonies, and interactive engagement that brings hope and purpose into the school hall.",
    audience: "Entire school",
    duration: "45–60 minutes",
    features: [
      "Music and drama",
      "Inspiring messages",
      "Student testimonies",
      "Interactive engagement",
    ],
    image: "https://images.pexels.com/photos/27769510/pexels-photo-27769510.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "presentation",
  },
  {
    id: "lunch-and-learn",
    name: "Lunch & Learn Sessions",
    tagline: "Intimate, meaningful conversations",
    description:
      "Smaller group discussions focused on purpose, relationships, real-life challenges, and encouragement — creating a safe space for students to explore faith together.",
    audience: "Small groups",
    duration: "30 minutes",
    features: [
      "Purpose discussions",
      "Relationship guidance",
      "Challenge support",
      "Personal encouragement",
    ],
    image: "https://images.pexels.com/photos/13537842/pexels-photo-13537842.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "users",
  },
  {
    id: "after-school-clubs",
    name: "After-School Clubs",
    tagline: "Ongoing mentorship and growth",
    description:
      "Ongoing mentorship and student engagement that builds leadership, character, and community through consistent weekly gatherings for interested students.",
    audience: "Interested students",
    duration: "1 hour weekly",
    features: [
      "Ongoing mentorship",
      "Leadership development",
      "Student engagement",
      "Community support",
    ],
    image: "https://images.pexels.com/photos/25457343/pexels-photo-25457343.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "book-open",
  },
  {
    id: "special-events",
    name: "Special Events",
    tagline: "Celebrating gifts and serving communities",
    description:
      "Talent showcases, service activities, outreach gatherings, and school community programs that celebrate student gifts and serve the wider community.",
    audience: "School community",
    duration: "2–4 hours",
    features: [
      "Talent showcases",
      "Service activities",
      "Outreach gatherings",
      "Community programs",
    ],
    image: "https://images.pexels.com/photos/30816564/pexels-photo-30816564.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "sparkles",
  },
];
