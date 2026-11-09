/*
 * Real TUCASA Nyerere Campus UDSM photos uploaded by the user, served from the CDN.
 * To change an image: update the matching import only.
 */
import campusBuilding from "@/assets/campus-building.jpg";
import worshipStageAsset from "@/assets/worship-stage.jpg.asset.json";
import choirStageLiveAsset from "@/assets/choir-stage-live.jpg.asset.json";
import singersMicrophonesAsset from "@/assets/singers-microphones.jpg.asset.json";
import membersWellbeingAsset from "@/assets/members-wellbeing.jpg.asset.json";
import beachFellowshipAsset from "@/assets/beach-fellowship.jpg.asset.json";
import singingGroupAsset from "@/assets/singing-group.jpg.asset.json";
import choirPortraitAsset from "@/assets/choir-portrait.jpg.asset.json";
import choirOutdoorsAsset from "@/assets/choir-outdoors.jpg.asset.json";
import choirServiceAsset from "@/assets/choir-service.jpg.asset.json";
import choirFullAsset from "@/assets/choir-full.jpg.asset.json";
import campusAerial from "@/assets/campus-aerial.jpg";
import bgSunrise from "@/assets/bg-sunrise.jpg";
import bgStainedGlass from "@/assets/bg-stainedglass.jpg";
import bgScripture from "@/assets/bg-scripture.jpg";
import bgCampusNight from "@/assets/bg-campus-night.jpg";

export const CAMPUS_NAME = "TUCASA Nyerere Campus UDSM";

const worshipStage = worshipStageAsset.url;
const choirStageLive = choirStageLiveAsset.url;
const singersMicrophones = singersMicrophonesAsset.url;
const membersWellbeing = membersWellbeingAsset.url;
const beachFellowship = beachFellowshipAsset.url;
const singingGroup = singingGroupAsset.url;
const choirPortrait = choirPortraitAsset.url;
const choirOutdoors = choirOutdoorsAsset.url;
const choirService = choirServiceAsset.url;
const choirFull = choirFullAsset.url;

export const img = {
  campusBuilding,
  worship: worshipStage,
  choir: choirStageLive,
  bibleStudy: bgScripture,
  outreach: beachFellowship,
  baptism: bgSunrise,
  prayer: bgStainedGlass,
  health: membersWellbeing,
  crusade: bgCampusNight,
  leaders: campusBuilding,
  fellowship: beachFellowship,
  media: singersMicrophones,
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
  leader: string;
};

export const ministries: Ministry[] = [
  {
    slug: "kiroho",
    name: "Spiritual Affairs Department",
    tagline: "Evangelism, Sabbath School and spiritual growth",
    image: worshipStage,
    intro:
      "The Spiritual Affairs Department of TUCASA Nyerere Campus UDSM leads evangelism, Sabbath School and the spiritual growth of students on campus — so that every student matures in faith throughout their studies.",
    focus: [
      "Campus evangelism and gospel campaigns",
      "Sabbath School and Bible study",
      "Prayer bands and the week of prayer",
      "Baptismal classes and new-member follow-up",
    ],
    leader: "Spiritual Affairs Coordinator",
  },
  {
    slug: "muziki",
    name: "Music Department",
    tagline: "TUCASA Nyerere Campus Choir and singing groups",
    image: choirFull,
    intro:
      "The Music Department is home to the TUCASA Nyerere Campus Choir and the campus singing groups. We lead worship, record gospel songs and minister in churches across Dar es Salaam.",
    focus: [
      "TUCASA Nyerere Campus Choir",
      "Singing groups (quartets, small groups)",
      "Voice training and musical instruments",
      "Concerts and song recording",
    ],
    leader: "Music Coordinator",
  },
  {
    slug: "mawasiliano",
    name: "Communication Department",
    tagline: "Media, social platforms, announcements and sound systems",
    image: singersMicrophones,
    intro:
      "The Communication Department of TUCASA Nyerere Campus UDSM oversees media, social platforms, announcements and sound systems so that the message reaches far beyond the campus.",
    focus: [
      "Media: photography, video and livestream",
      "Social media platforms",
      "Announcements and event banners",
      "Sound systems",
    ],
    leader: "Communication Secretary",
  },
  {
    slug: "afya",
    name: "Health Department",
    tagline: "First aid, community health and wellbeing",
    image: membersWellbeing,
    intro:
      "The Health Department serves first aid, community health and the wellbeing of TUCASA Nyerere Campus UDSM members by living out Adventist health principles.",
    focus: [
      "First aid",
      "Community health and free screening",
      "Good nutrition and healthy living",
      "Member wellbeing and mental health",
    ],
    leader: "Health Coordinator",
  },
];

export const worshipSchedule = {
  title: "Daily Worship",
  intro:
    "At TUCASA Nyerere Campus UDSM we worship together every single day. Everyone is welcome — come as you are.",
  times: [
    {
      label: "Monday – Friday",
      time: "8:00 PM – 9:00 PM",
      note: "Evening worship every weekday",
    },
    {
      label: "Saturday, Sunday & Public Holidays",
      time: "7:00 PM – 8:00 PM",
      note: "Evening worship on weekends and holidays",
    },
  ],
  venues: [
    { days: "Saturday – Thursday", place: "ALR D", detail: "Next to Nkrumah Hall" },
    { days: "Friday", place: "Yombo 2", detail: "Friday worship venue" },
  ],
  prayerDay: {
    day: "Wednesday",
    text: "Wednesday is our dedicated day of prayer — the whole family gathers to seek God together.",
  },
};

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
  { src: choirStageLive, alt: "TUCASA Nyerere Campus Choir ministering live on stage", label: "Choir Live on Stage" },
  { src: choirFull, alt: "Full TUCASA Nyerere Campus Choir in purple robes", label: "The Campus Choir" },
  { src: worshipStage, alt: "Students leading worship on stage", label: "Worship Service" },
  { src: singingGroup, alt: "A TUCASA singing group ministering", label: "Singing Groups" },
  { src: choirOutdoors, alt: "Choir members in purple robes outdoors", label: "Choir Family" },
  { src: choirService, alt: "The choir ministering during a church service", label: "Sabbath Service" },
  { src: choirPortrait, alt: "Choir members portrait after a service", label: "After the Service" },
  { src: singersMicrophones, alt: "Singers leading praise with microphones", label: "Praise Team" },
  { src: beachFellowship, alt: "TUCASA members on a beach fellowship outing", label: "Beach Fellowship" },
  { src: membersWellbeing, alt: "TUCASA members together after a meeting", label: "Member Wellbeing" },
  { src: img.campusAerial, alt: "Aerial view of the campus at sunset", label: "Nyerere Campus" },
  { src: img.campusBuilding, alt: "A University of Dar es Salaam campus building", label: "Our Campus" },
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
