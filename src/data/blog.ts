export const blogCategories = [
  "School Outreach",
  "Faith & Purpose",
  "Discipleship",
  "Youth Leadership",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  speaker: string;
  location?: string;
  category: BlogCategory;
  scripture: string;
  coverImage?: string;
  keyTakeaways: string[];
  body: string[];
  videoUrl?: string;
}

/**
 * Add new message summaries to the top of this array so the latest post appears first.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "walking-in-purpose-in-your-youth",
    title: "Walking in Purpose in Your Youth",
    excerpt:
      "A summary of our outreach message encouraging students not to wait until adulthood to live meaningfully for Christ, but to embrace God's calling right where they are.",
    date: "May 2026",
    readTime: "4 min read",
    speaker: "Ephesus Outreach Ministry Team",
    location: "High School Outreach Series",
    category: "School Outreach",
    scripture: "1 Timothy 4:12",
    coverImage: "/images/outreach-worship.jpg",
    keyTakeaways: [
      "Your age does not disqualify you from being an example of faith, love, and integrity on campus.",
      "Purpose begins with knowing God personally rather than chasing applause or fitting in with the crowd.",
      "Small daily choices — honesty, kindness, prayer, and diligence — shape the person you become.",
    ],
    body: [
      "Many young people carry the quiet assumption that their real impact begins only after school, once they have a degree, a career, or a bigger platform. During this outreach session, we opened 1 Timothy 4:12 to remind every student that God does not wait for you to grow older before He uses your life.",
      "Paul urged Timothy not to let anyone look down on him because of his youth, but instead to set an example for believers in speech, conduct, love, faith, and purity. Those five areas meet students directly in everyday campus life — in classrooms, dormitories, friendships, and moments of pressure.",
      "Purpose is not something we invent on our own; it is discovered in relationship with Christ. When a student anchors their identity in Jesus, fear of peer pressure loses its grip and courage takes its place.",
      "We closed by inviting students to commit this term to living intentionally: guarding their words, loving people well, staying rooted in Scripture, and trusting God to lead their next steps.",
    ],
    videoUrl: "https://www.youtube.com/@ephesusgatheringsworldwide",
  },
  {
    slug: "your-word-is-a-lamp-building-a-daily-walk",
    title: "Your Word Is a Lamp: Building a Daily Walk With God",
    excerpt:
      "Key reflections on how Scripture brings clarity in seasons of confusion and practical habits for reading the Bible consistently as a student.",
    date: "March 2026",
    readTime: "3 min read",
    speaker: "Ephesus Outreach Ministry Team",
    location: "Bible Distribution & Discipleship Session",
    category: "Discipleship",
    scripture: "Psalm 119:105",
    coverImage: "/images/open-bible.jpg",
    keyTakeaways: [
      "God's Word lights the next step in front of you, even when you cannot see the entire road ahead.",
      "Consistency matters more than length — starting with ten focused minutes a day builds lasting spiritual strength.",
      "Reading Scripture alongside other believers helps turn head knowledge into lived obedience.",
    ],
    body: [
      "Whenever we share Bibles during school outreach visits, one of the most common questions students ask is simple and honest: 'Where do I start reading, and how do I keep going when school gets busy?'",
      "Psalm 119:105 pictures God's Word as a lamp to our feet and a light to our path. A lamp in the ancient world did not flood the entire horizon with light — it gave enough clarity to take the next safe step. In the same way, Scripture meets us in our daily decisions, worries, and questions.",
      "We walked through a simple rhythm any student can practice: start with the Gospel of John, read one short passage slowly, ask what it reveals about Jesus, and turn one verse into a short prayer before beginning the day.",
      "Spiritual growth rarely happens in a single dramatic moment alone; it is sustained by daily fellowship with God and honest community with others who encourage your faith.",
    ],
    videoUrl: "https://www.youtube.com/@ephesusgatheringsworldwide",
  },
  {
    slug: "standing-firm-in-faith-on-campus",
    title: "Standing Firm in Faith and Hope on Campus",
    excerpt:
      "Highlights from our message on resilience, prayer, and holding onto Christian conviction when navigating academic stress and social pressure.",
    date: "January 2026",
    readTime: "4 min read",
    speaker: "Ephesus Outreach Ministry Team",
    location: "Student Fellowship & Prayer Gathering",
    category: "Faith & Purpose",
    scripture: "Joshua 1:9",
    coverImage: "/images/prayer-gathering.jpg",
    keyTakeaways: [
      "Courage is not the absence of anxiety; it is trusting that God is present with you in every challenge.",
      "Prayer turns overwhelming pressure into peace when we bring our real concerns to God.",
      "You were never meant to walk alone — healthy Christian friendships strengthen your stand.",
    ],
    body: [
      "Student life brings real pressures: examinations, expectations from family, uncertainty about the future, and the constant pull to compromise just to belong. In this message, we looked at God's promise to Joshua: 'Be strong and courageous... for the Lord your God will be with you wherever you go.'",
      "True strength is rooted in God's presence, not our own perfection. Standing firm on campus does not mean pretending you never struggle; it means knowing who to run to when you feel stretched thin.",
      "Throughout the session, students prayed together for peace over their studies, wisdom in their friendships, and boldness to share hope with classmates who feel discouraged or overlooked.",
      "Our prayer is that every student leaves knowing they are deeply loved by God, equipped by His Spirit, and part of a wider family cheering them on.",
    ],
    videoUrl: "https://www.youtube.com/@ephesusgatheringsworldwide",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
