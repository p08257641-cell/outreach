
export interface Partner {
  name: string;
  image?: string;
  description?: string;
}

export const partners: Partner[] = [
  {
    name: "Ephesus Gatherings Worldwide",
    image: "/partners/ephesus-gatherings.png", 
  },
  {
    name: "Intimacy Fire Ministries",
    image: "/partners/intimacy-fire.png",
  },
  {
    name: "Ephesus Gatherings Worldwide Partners",
    image: "/partners/ephesus-worldwide-partners.png",
  },
];

export const partnerImage = "/partners/ephesus-partners.png";
