
export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  registrationUrl?: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  // Add confirmed events here.
  // Example structure:
  //
  // {
  //   id: "event-1",
  //   title: "Your Event Title",
  //   date: "2026-12-12",
  //   time: "9:00 AM",
  //   location: "Event venue, Accra",
  //   description: "A short description of the event.",
  //   image: "/events/event-1.jpg",
  //   registrationUrl: "https://forms.gle/...",
  // },
];
