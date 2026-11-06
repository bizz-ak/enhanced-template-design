/*
 * All images here contain no people (buildings, instruments, scenery).
 * To change an image: drop a new file in src/assets/ then update the matching import only.
 */
import campusBuilding from "@/assets/campus-building.jpg";
import sanctuary from "@/assets/sanctuary.jpg";
import musicStage from "@/assets/music-stage.jpg";
import mediaBooth from "@/assets/media-booth.jpg";
import healthKit from "@/assets/health-kit.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import bgSunrise from "@/assets/bg-sunrise.jpg";
import bgStainedGlass from "@/assets/bg-stainedglass.jpg";
import bgScripture from "@/assets/bg-scripture.jpg";
import bgCampusNight from "@/assets/bg-campus-night.jpg";

export const CAMPUS_NAME = "TUCASA Nyerere Campus UDSM";

export const img = {
  campusBuilding,
  worship: sanctuary,
  choir: musicStage,
  bibleStudy: bgScripture,
  outreach: bgSunrise,
  baptism: bgSunrise,
  prayer: bgStainedGlass,
  health: healthKit,
  crusade: bgCampusNight,
  leaders: campusBuilding,
  fellowship: sanctuary,
  media: mediaBooth,
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
    slug: "kiroho",
    name: "Spiritual Affairs Department",
    tagline: "Evangelism, Sabbath School and spiritual growth",
    image: sanctuary,
    intro:
      "The Spiritual Affairs Department of TUCASA Nyerere Campus UDSM leads evangelism, Sabbath School and the spiritual growth of students on campus — so that every student matures in faith throughout their studies.",
    focus: [
      "Campus evangelism and gospel campaigns",
      "Sabbath School and Bible study",
      "Prayer bands and the week of prayer",
      "Baptismal classes and new-member follow-up",
    ],
    meeting: "Sabbath School: every Sabbath, 8:30 AM",
    leader: "Spiritual Affairs Coordinator",
  },
  {
    slug: "muziki",
    name: "Music Department",
    tagline: "TUCASA Nyerere Campus Choir and singing groups",
    image: musicStage,
    intro:
      "The Music Department is home to the TUCASA Nyerere Campus Choir and the campus singing groups. We lead worship, record gospel songs and minister in churches across Dar es Salaam.",
    focus: [
      "TUCASA Nyerere Campus Choir",
      "Singing groups (quartets, small groups)",
      "Voice training and musical instruments",
      "Concerts and song recording",
    ],
    meeting: "Rehearsals: Tuesday and Thursday, 7:00 PM",
    leader: "Music Coordinator",
  },
  {
    slug: "mawasiliano",
    name: "Communication Department",
    tagline: "Media, social platforms, announcements and sound systems",
    image: mediaBooth,
    intro:
      "The Communication Department of TUCASA Nyerere Campus UDSM oversees media, social platforms, announcements and sound systems so that the message reaches far beyond the campus.",
    focus: [
      "Media: photography, video and livestream",
      "Social media platforms",
      "Announcements and event banners",
      "Sound systems",
    ],
    meeting: "Planning meeting: Sunday, 4:00 PM",
    leader: "Communication Secretary",
  },
  {
    slug: "afya",
    name: "Health Department",
    tagline: "First aid, community health and wellbeing",
    image: healthKit,
    intro:
      "The Health Department serves first aid, community health and the wellbeing of TUCASA Nyerere Campus UDSM members by living out Adventist health principles.",
    focus: [
      "First aid",
      "Community health and free screening",
      "Good nutrition and healthy living",
      "Member wellbeing and mental health",
    ],
    meeting: "Health camp: every semester",
    leader: "Health Coordinator",
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
    image: img.worship,
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
    image: img.fellowship,
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
    image: img.prayer,
    summary: "Seven evenings of focused prayer, fasting and revival preaching at the heart of the semester.",
    details: ["Evening revival meetings", "Morning fasting bands", "Personal consecration night", "Communion service"],
  },
  {
    slug: "campus-crusade",
    title: "Campus Evangelistic Crusade",
    when: "August & March",
    image: img.crusade,
    summary: "Two weeks of public evangelism led entirely by students, ending in a baptismal celebration.",
    details: ["Nightly meetings", "Health expo", "Music evenings", "Baptism at the ocean shore"],
  },
  {
    slug: "baptism-sabbath",
    title: "Baptism Sabbath",
    when: "End of each crusade",
    image: img.baptism,
    summary: "A celebration as new believers publicly commit their lives to Christ.",
    details: ["Baptismal class graduation", "Testimony sharing", "Baptismal service", "Welcome into fellowship"],
  },
  {
    slug: "health-expo",
    title: "Community Health Expo",
    when: "Once per semester",
    image: img.health,
    summary: "Free health screening and lifestyle education for students and the surrounding community.",
    details: ["Blood pressure & sugar tests", "Nutrition counselling", "Plant-based cooking demo", "Fitness challenge"],
  },
];

export const galleryImages = [
  { src: img.worship, alt: "Students worshipping with raised hands", label: "Friday Vespers" },
  { src: img.choir, alt: "TUCASA choir singing on stage", label: "Choir Ministry" },
  { src: img.bibleStudy, alt: "Students studying the Bible on the lawn", label: "Campus Bible Study" },
  { src: img.outreach, alt: "Students giving food and clothes in a village", label: "Community Outreach" },
  { src: img.baptism, alt: "Baptism at sunrise", label: "Baptism Sabbath" },
  { src: img.health, alt: "Free health screening tent", label: "Health Expo" },
  { src: img.fellowship, alt: "Fellowship meal outdoors", label: "Sabbath Fellowship" },
  { src: img.media, alt: "Media team filming a service", label: "Media Team" },
  { src: img.crusade, alt: "Students at an evening meeting", label: "Campus Crusade" },
  { src: img.campusAerial, alt: "Aerial view of the campus at sunset", label: "Nyerere Campus" },
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
