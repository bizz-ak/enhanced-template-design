import worship from "@/assets/worship.jpg";
import choir from "@/assets/choir.jpg";
import bibleStudy from "@/assets/bible-study.jpg";
import outreach from "@/assets/outreach.jpg";
import baptism from "@/assets/baptism.jpg";
import prayer from "@/assets/prayer.jpg";
import health from "@/assets/health.jpg";
import crusade from "@/assets/crusade.jpg";
import leaders from "@/assets/leaders.jpg";
import fellowship from "@/assets/fellowship.jpg";
import media from "@/assets/media.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import bgSunrise from "@/assets/bg-sunrise.jpg";
import bgStainedGlass from "@/assets/bg-stainedglass.jpg";
import bgScripture from "@/assets/bg-scripture.jpg";
import bgCampusNight from "@/assets/bg-campus-night.jpg";

export const img = {
  worship,
  choir,
  bibleStudy,
  outreach,
  baptism,
  prayer,
  health,
  crusade,
  leaders,
  fellowship,
  media,
  campusAerial,
  bgSunrise,
  bgStainedGlass,
  bgScripture,
  bgCampusNight,
};

export type Ministry = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  intro: string;
  focus: string[];
  meeting: string;
  leader: string;
};

export const ministries: Ministry[] = [
  {
    slug: "music",
    name: "Music & Choir",
    tagline: "Kwaya na muziki wa injili",
    image: choir,
    intro:
      "Our choir and instrumentalists lead campus worship, record original Swahili gospel music and minister at churches around Dar es Salaam.",
    focus: ["Sabbath worship leading", "Voice training clinics", "Annual gospel concert", "Studio recordings"],
    meeting: "Rehearsals: Tuesday & Thursday, 7:00 PM",
    leader: "Music Coordinator",
  },
  {
    slug: "prayer",
    name: "Prayer Bands",
    tagline: "Vikundi vya maombi",
    image: prayer,
    intro:
      "Small prayer bands meet across the halls of residence every morning and evening, carrying the burdens of students before God.",
    focus: ["Morning devotions", "Week of prayer", "Prayer walks", "Exam season intercession"],
    meeting: "Daily: 5:30 AM & 9:00 PM",
    leader: "Prayer Coordinator",
  },
  {
    slug: "bible-study",
    name: "Bible Study",
    tagline: "Kujifunza Neno",
    image: bibleStudy,
    intro:
      "Verse-by-verse study groups that help students think deeply, ask honest questions and build convictions that survive campus life.",
    focus: ["Sabbath School lessons", "Doctrine deep dives", "One-to-one Bible studies", "Apologetics forums"],
    meeting: "Wednesday, 6:30 PM",
    leader: "Sabbath School Superintendent",
  },
  {
    slug: "outreach",
    name: "Community Outreach",
    tagline: "Huduma kwa jamii",
    image: outreach,
    intro:
      "We take the gospel beyond the gate — visiting orphanages, hospitals and nearby communities with practical help and hope.",
    focus: ["Orphanage visits", "Food & clothing drives", "Village mission weekends", "Literature distribution"],
    meeting: "Outreach Sundays, monthly",
    leader: "Personal Ministries Leader",
  },
  {
    slug: "health",
    name: "Health & Wellness",
    tagline: "Afya na maisha bora",
    image: health,
    intro:
      "Adventist health principles lived out on campus: free screenings, plant-based cooking classes and mental-health support.",
    focus: ["Free BP & sugar checks", "Cooking demos", "Fitness Sundays", "Mental health talks"],
    meeting: "Health camp: every semester",
    leader: "Health Ministries Leader",
  },
  {
    slug: "media",
    name: "Media & Publicity",
    tagline: "Habari na teknolojia",
    image: media,
    intro:
      "The team behind every livestream, poster and photo album — using technology to spread the message far past Nyerere Campus.",
    focus: ["Livestreaming", "Photography & video", "Social media", "Sound engineering"],
    meeting: "Planning: Sunday, 4:00 PM",
    leader: "Communication Secretary",
  },
  {
    slug: "welfare",
    name: "Welfare & Hospitality",
    tagline: "Ukarimu na msaada",
    image: fellowship,
    intro:
      "Nobody should struggle alone. Welfare supports students facing fees, health or food challenges and welcomes every newcomer.",
    focus: ["Freshers welcome", "Emergency support fund", "Fellowship meals", "Hospital visitation"],
    meeting: "Fellowship lunch: every Sabbath",
    leader: "Welfare Secretary",
  },
  {
    slug: "evangelism",
    name: "Campus Evangelism",
    tagline: "Uinjilisti chuoni",
    image: crusade,
    intro:
      "Student-led evangelistic series, dorm-to-dorm visitation and public meetings that have led hundreds to baptism.",
    focus: ["Annual campus crusade", "Dorm visitation", "Baptismal classes", "Follow-up discipleship"],
    meeting: "Crusade: August & March",
    leader: "Evangelism Coordinator",
  },
];

export type EventItem = {
  slug: string;
  title: string;
  when: string;
  image: string;
  summary: string;
  details: string[];
};

export const events: EventItem[] = [
  {
    slug: "friday-vespers",
    title: "Friday Vespers",
    when: "Every Friday · 6:30 PM",
    image: worship,
    summary: "We welcome the Sabbath with songs, testimonies and a short message as the sun goes down.",
    details: [
      "Opening songs led by the campus choir",
      "Student testimonies and mission reports",
      "Short devotional message",
      "Closing prayer bands by hall of residence",
    ],
  },
  {
    slug: "sabbath-worship",
    title: "Sabbath Worship",
    when: "Every Sabbath · 8:30 AM – 1:00 PM",
    image: fellowship,
    summary: "Sabbath School discussion, divine service and a shared fellowship lunch — the heart of our week.",
    details: [
      "8:30 AM Sabbath School lesson study",
      "10:30 AM Divine service",
      "1:00 PM Fellowship lunch",
      "4:00 PM Afternoon programme / outreach",
    ],
  },
  {
    slug: "week-of-prayer",
    title: "Week of Prayer",
    when: "Twice per semester",
    image: prayer,
    summary: "Seven evenings of focused prayer, fasting and revival preaching at the heart of the semester.",
    details: ["Evening revival meetings", "Morning fasting bands", "Personal consecration night", "Communion service"],
  },
  {
    slug: "campus-crusade",
    title: "Campus Evangelistic Crusade",
    when: "August & March",
    image: crusade,
    summary: "Two weeks of public evangelism led entirely by students, ending in a baptismal celebration.",
    details: ["Nightly meetings", "Health expo", "Music evenings", "Baptism at the ocean shore"],
  },
  {
    slug: "baptism-sabbath",
    title: "Baptism Sabbath",
    when: "End of each crusade",
    image: baptism,
    summary: "A celebration as new believers publicly commit their lives to Christ.",
    details: ["Baptismal class graduation", "Testimony sharing", "Baptismal service", "Welcome into fellowship"],
  },
  {
    slug: "health-expo",
    title: "Community Health Expo",
    when: "Once per semester",
    image: health,
    summary: "Free health screening and lifestyle education for students and the surrounding community.",
    details: ["Blood pressure & sugar tests", "Nutrition counselling", "Plant-based cooking demo", "Fitness challenge"],
  },
];

export const galleryImages = [
  { src: worship, alt: "Students worshipping with raised hands", label: "Friday Vespers" },
  { src: choir, alt: "TUCASA choir singing on stage", label: "Choir Ministry" },
  { src: bibleStudy, alt: "Students studying the Bible on the lawn", label: "Campus Bible Study" },
  { src: outreach, alt: "Students giving food and clothes in a village", label: "Community Outreach" },
  { src: baptism, alt: "Baptism at sunrise", label: "Baptism Sabbath" },
  { src: health, alt: "Free health screening tent", label: "Health Expo" },
  { src: fellowship, alt: "Fellowship meal outdoors", label: "Sabbath Fellowship" },
  { src: media, alt: "Media team filming a service", label: "Media Team" },
  { src: crusade, alt: "Students at an evening meeting", label: "Campus Crusade" },
  { src: campusAerial, alt: "Aerial view of the campus at sunset", label: "Nyerere Campus" },
];

export const beliefs = [
  { title: "The Holy Scriptures", text: "The Bible is God's written Word, the trustworthy revelation of His will." },
  { title: "The Trinity", text: "One God: Father, Son and Holy Spirit — a unity of three co-eternal Persons." },
  { title: "Salvation in Christ", text: "By grace through faith in Jesus, who died and rose for our redemption." },
  { title: "The Sabbath", text: "The seventh day is a memorial of creation and a weekly gift of rest in Christ." },
  { title: "Christian Living", text: "Body, mind and spirit belong to God — a lifestyle of health and integrity." },
  { title: "The Second Coming", text: "Jesus will return literally and visibly — our blessed hope and motivation." },
];

export const leadership = [
  { role: "President", name: "Student Executive", note: "Provides overall vision and represents TUCASA to the university." },
  { role: "Vice President", name: "Student Executive", note: "Coordinates ministries and deputises for the president." },
  { role: "General Secretary", name: "Student Executive", note: "Keeps records, correspondence and membership registry." },
  { role: "Treasurer", name: "Student Executive", note: "Stewards offerings, budgets and project funds transparently." },
  { role: "Chaplain / Spiritual Advisor", name: "Campus Chaplaincy", note: "Provides pastoral care and spiritual direction." },
  { role: "Music Coordinator", name: "Music Department", note: "Leads choir, instrumentalists and worship teams." },
  { role: "Personal Ministries", name: "Outreach Department", note: "Plans evangelism, visitation and community projects." },
  { role: "Communication Secretary", name: "Media Department", note: "Runs media, publicity and livestreams." },
];

export const timeline = [
  { year: "1979", title: "The beginning", text: "A handful of Adventist students begin meeting under a tree at the University of Dar es Salaam." },
  { year: "1990s", title: "Growth", text: "Regular Sabbath services, a choir and organised outreach take root on campus." },
  { year: "2005", title: "Nyerere Campus", text: "TUCASA establishes a dedicated fellowship serving the Nyerere Campus community." },
  { year: "2015", title: "Missions era", text: "Annual student-led crusades and village missions expand beyond the city." },
  { year: "Today", title: "500+ members", text: "A thriving family of students serving God, the campus and the nation." },
];
