export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "World Cricket Championship 3",
    desc: "Step onto the digital cricket pitch and experience the thrill of the NPL and beyond with World Cricket Championship 3 (WCC3)! Craft your dream team, dominate the league, and become a cricket legend in the most realistic and immersive mobile cricket game.",
    subdesc:
      "WCC3 delivers an authentic cricket experience like no other. From the roar of the crowd in meticulously crafted stadiums to the dynamic AI that adapts to your skill, every detail has been perfected.",
    href: "https://play.google.com/store/apps/details?id=com.nextwave.wcc3&pcampaignid=web_share",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
  },

  {
    title: "RADDX - Racing Metaverse",
    desc: "RADDX - Racing Metaverse game is a free to play epic online futuristic Multiplayer Racing game with stunning new game locations, attractive EV cars, take down the chasing cops, power-ups, Mystery Box, rewards for Premium Tournaments & much more!",
    subdesc:
      "Clash against crew of your rivals in Real-Time Multiplayer extreme racing. Burn the asphalt & wreck the props and Drift through the street racing tracks without crashing.",
    href: "https://play.google.com/store/apps/details?id=com.chennaigames.mrracer&pcampaignid=web_share",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
  },

  {
    title: "Meta Cricket League",
    desc: "Step into the world's first Metaverse NFT Cricket Game and elevate your cricketing journey like never before! Experience lifelike 360° motion-captured shots and unique fielding actions from your beloved cricketers in this immersive NFT game.",
    subdesc:
      "Compete against players worldwide and effortlessly claim daily rewards, all while enjoying the engaging Play-to-Earn functionality.This Play-to-Earn NFT-backed blockchain game, powered by Jump.",
    href: "https://play.google.com/store/apps/details?id=com.metacricketleague.app&pcampaignid=web_share",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
  },

  {
    title: "Hitwicket Cricket Game 2025",
    desc: "Hitwicket Cricket Game 2025 combines the thrill of a nail-biting cricket match on the field, with high-stakes decision making behind the scenes, on your mobile device. It's as easy as a tap, yet intense like a chess strategy game.",
    subdesc:
      "Immerse yourself in cricket - batting, bowling, and building a winning strategy against millions of global cricket games fans. Chase the excitement of an IPL cricket match, or engage in the depth of ODI & Test cricket",
    href: "https://play.google.com/store/apps/details?id=cricketgames.hitwicket.strategy&pcampaignid=web_share",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
