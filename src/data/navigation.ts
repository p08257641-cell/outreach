export interface NavItem { label: string; to: string; anchor?: boolean; }
export const mainNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about", anchor: true },
  { label: "Programs", to: "/#programs", anchor: true },
  { label: "Gallery", to: "/gallery" },
  { label: "Events", to: "/#events", anchor: true },
  { label: "Resources", to: "/#resources", anchor: true },
  { label: "Testimonies", to: "/#testimonies", anchor: true },
  { label: "Contact", to: "/contact" },
];
export const ctaNav: NavItem = { label: "Get Involved", to: "/#join", anchor: true };
export const footerNav = {
  explore: mainNav,
  resources: [
    { label: "Listen", to: "/#resources" },
    { label: "Discover Your Purpose", to: "/#about" },
    { label: "Ask a Question", to: "/contact" },
    { label: "Get Help", to: "/contact" },
  ],
  connect: [
    { label: "Join Our Mission", to: "/#join" },
    { label: "Get Help", to: "/contact" },
    { label: "Contact Us", to: "/contact" },
  ],
};
