import { title } from "process";
import {
  Behance,
  Caller,
  Drrible,
  Facebook,
  Instagram,
  Linkdin,
  Mail,
  Mobileapp,
  Pinterest,
  SocialMediaPost,
  Tweeter,
  Uiux,
  Web,
} from "../components/common/Icon";
import { TabContent1 } from "../components/TabContent";
import ResearchContent from "../components/ResearchContent";
export const HEADER_CONTACT_DETAIL = [
  {
    path: "tel: +91 86077 01217",
    svg: <Caller />,
    title: "+91 86077 01217",
  },
  {
    path: "mailto: maanankur36@gmail.com",
    svg: <Mail />,
    title: "maanankur36@gmail.com",
  },
];

export const HEADER_SOCIAL_MEDIA_LINKS = [
  {
    path: "",
    svg: <Instagram />,
  },
  {
    path: "",
    svg: <Facebook />,
  },
  {
    path: "",
    svg: <Tweeter />,
  },
  {
    path: "",
    svg: <Behance />,
  },
  {
    path: "",
    svg: <Drrible />,
  },
  {
    path: "",
    svg: <Linkdin />,
  },
  {
    path: "",
    svg: <Pinterest />,
  },
];

export const NAV_LINK = [
  {
    title: "Home",
    path: "",
  },
  {
    title: "About",
    path: "",
  },
  {
    title: "Services",
    path: "",
  },
  {
    title: "Portfolio",
    path: "",
  },
  {
    title: "Blogs",
    path: "",
  },
];

export const STATICS = [
  {
    stats: "200+",
    title: "Projects Completed",
  },
  {
    stats: "2+",
    title: "Years of Experience",
  },
  {
    stats: "97%",
    title: "Client Retention Rate",
  },
  {
    stats: "5+",
    title: "Awards Won",
  },
];

export const OFFER_BOX = [
  [
    {
      icon: <Uiux />,
      title: ["UI/UX ", "Design"],
      description:
        "I design simple and attractive interfaces that are easy to use. I create detailed plans and test versions to make sure every part works well and helps users do what they need to do.",
      linktitle: "Get This Service",
      link: "#getthisservice",
    },
  ],
  [
    {
      icon: <Web />,
      title: ["Web", "Design"],
      description:
        "I create beautiful, fast-loading websites that work well on all devices. Before starting, I take time to understand your brand, who you want to reach, & what you want to achieve.",
      linktitle: "Get This Service",
      link: "#getthisservice",
    },
  ],
  [
    {
      icon: <Mobileapp />,
      title: ["Mobile", "App"],
      description:
        "I create beautiful, fast-loading websites that work well on all devices. Before starting, I take time to understand your brand, who you want to reach, & what you want to achieve.",
      linktitle: "Get This Service",
      link: "#getthisservice",
    },
    {
      icon: <SocialMediaPost />,
      title: ["Social Media ", "Post"],
      description:
        "Get noticed online with eye-catching social media posts. I design posts that match your brand's style & message, making you stand out on Instagram, LinkedIn & other platforms.",
      linktitle: "Get This Service",
      link: "#getthisservice",
    },
  ],
];
export const TAB_BUTTON = [
  {
    title: "All",
    description: <TabContent1 />,
  },
  {
    title: "Artificial intelligence",
    description: <TabContent1 />,
  },
  {
    title: "Education",
    description: <TabContent1 />,
  },
  {
    title: "Real Estate",
    description: <TabContent1 />,
  },
  {
    title: "E-Commerce",

    description: <TabContent1 />,
  },
  {
    title: "Healthcare & Wellness",
    description: <TabContent1 />,
  },
  {
    title: "E-Commerce",
    description: <TabContent1 />,
  },
  {
    title: "Healthcare & Wellness",
    description: <TabContent1 />,
  },
];
export const FAQ_DATA = [
  {
    title: "Research & Strategy – Understanding Your Vision",
    description: <ResearchContent />,
  },
  {
    title: "Wireframing & Prototyping – Laying the Blueprint",
    description:
      "Before designing anything, I dive deep into your business, target audience, and competitors. This phase includes:",
  },
  {
    title: "UI Design & Development – Bringing Ideas to Life",
    description:
      "Before designing anything, I dive deep into your business, target audience, and competitors. This phase includes:",
  },
  {
    title: "Testing & Feedback – Refining the Experience",
    description:
      "Before designing anything, I dive deep into your business, target audience, and competitors. This phase includes:",
  },
  {
    title: "Delivery & Support – Ensuring Long-Term Success",
    description:
      "Before designing anything, I dive deep into your business, target audience, and competitors. This phase includes:",
  },
];
