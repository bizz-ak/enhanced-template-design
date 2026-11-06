/*
 * Picha zote hapa hazina watu (majengo, vyombo, mandhari).
 * Kubadilisha picha: weka faili jipya src/assets/ kisha badili import husika tu.
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
    name: "Idara ya Mambo ya Kiroho",
    tagline: "Uinjilisti, Shule ya Sabato na makuzi ya kiroho",
    image: sanctuary,
    intro:
      "Idara ya Mambo ya Kiroho ya TUCASA Nyerere Campus UDSM inaongoza uinjilisti, Shule ya Sabato na makuzi ya kiroho ya wanafunzi kampasini — ili kila mwanafunzi akue katika imani wakati wa masomo yake.",
    focus: [
      "Uinjilisti kampasini na mikutano ya injili",
      "Shule ya Sabato na masomo ya Biblia",
      "Vikundi vya maombi na wiki ya maombi",
      "Madarasa ya ubatizo na ufuatiliaji wa waumini wapya",
    ],
    meeting: "Shule ya Sabato: kila Sabato, 8:30 asubuhi",
    leader: "Mratibu wa Mambo ya Kiroho",
  },
  {
    slug: "muziki",
    name: "Idara ya Muziki",
    tagline: "TUCASA Nyerere Campus Choir na vikundi vya uimbaji",
    image: musicStage,
    intro:
      "Idara ya Muziki ndiyo nyumbani kwa Kwaya ya TUCASA Nyerere Campus (TUCASA Nyerere Campus Choir) pamoja na vikundi vya uimbaji vya kampasi. Tunaongoza ibada, tunarekodi nyimbo za injili na kuhudumu makanisani Dar es Salaam.",
    focus: [
      "TUCASA Nyerere Campus Choir",
      "Vikundi vya uimbaji (quartets, vikundi vidogo)",
      "Mafunzo ya sauti na vyombo vya muziki",
      "Matamasha na kurekodi nyimbo",
    ],
    meeting: "Mazoezi: Jumanne na Alhamisi, saa 1:00 usiku",
    leader: "Mratibu wa Muziki",
  },
  {
    slug: "mawasiliano",
    name: "Idara ya Mawasiliano",
    tagline: "Media, mitandao ya kijamii, matangazo na sound system",
    image: mediaBooth,
    intro:
      "Idara ya Mawasiliano ya TUCASA Nyerere Campus UDSM inasimamia media, mitandao ya kijamii, matangazo na mifumo ya sauti (sound system) ili ujumbe ufike mbali zaidi ya kampasi.",
    focus: [
      "Media: picha, video na livestream",
      "Mitandao ya kijamii",
      "Matangazo na mabango ya matukio",
      "Mifumo ya sauti (Sound system)",
    ],
    meeting: "Kikao cha mipango: Jumapili, saa 10:00 jioni",
    leader: "Katibu wa Mawasiliano",
  },
  {
    slug: "afya",
    name: "Idara ya Afya",
    tagline: "Huduma ya kwanza, afya ya jamii na ustawi",
    image: healthKit,
    intro:
      "Idara ya Afya inahudumia huduma ya kwanza, afya ya jamii na ustawi wa wanachama wa TUCASA Nyerere Campus UDSM kwa kuishi kanuni za afya za Kiadventista.",
    focus: [
      "Huduma ya kwanza (First Aid)",
      "Afya ya jamii na upimaji wa bure",
      "Lishe bora na maisha yenye afya",
      "Ustawi wa wanachama na afya ya akili",
    ],
    meeting: "Kambi ya afya: kila muhula",
    leader: "Mratibu wa Afya",
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
